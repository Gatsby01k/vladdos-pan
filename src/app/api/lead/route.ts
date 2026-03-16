import { mkdir, appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

const requiredFields = [
  'partnerType',
  'name',
  'email',
  'telegram',
  'vertical',
  'trafficType',
  'monthlyVolume',
  'topGeo',
  'dealModel',
  'message',
] as const;

const leadKeys = [...requiredFields, 'company', 'website', 'startedAt'] as const;

type LeadKey = (typeof leadKeys)[number];
type LeadPayload = Record<LeadKey, string>;

type SubmissionResult = {
  telegramSent: boolean;
  webhookSent: boolean;
  storedFallback: boolean;
  deduplicated: boolean;
};

const MAX_FIELD_LENGTH: Partial<Record<LeadKey, number>> = {
  partnerType: 80,
  name: 120,
  company: 160,
  email: 160,
  telegram: 80,
  vertical: 80,
  trafficType: 180,
  monthlyVolume: 120,
  topGeo: 140,
  dealModel: 120,
  message: 3000,
  website: 0,
  startedAt: 80,
};

const submissionWindowMs = 60_000;
const recentSubmissions = new Map<string, number>();
const recentIpHits = new Map<string, number[]>();

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function validate(payload: Partial<LeadPayload>) {
  const missing = requiredFields.filter((field) => !payload[field]?.trim());

  if (missing.length) {
    return `Missing required fields: ${missing.join(', ')}`;
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Please provide a valid email address.';
  }

  if (!payload.telegram?.startsWith('@')) {
    return 'Please provide a Telegram handle starting with @.';
  }

  for (const key of leadKeys) {
    const maxLength = MAX_FIELD_LENGTH[key] ?? 500;
    if ((payload[key] || '').length > maxLength) {
      return `Field too long: ${key}.`;
    }
  }

  if (payload.website) {
    return 'Submission blocked.';
  }

  if (payload.startedAt) {
    const startedAt = new Date(payload.startedAt).getTime();
    if (Number.isFinite(startedAt) && Date.now() - startedAt < 4_000) {
      return 'Please take a moment to complete the form before submitting.';
    }
  }

  return null;
}

function applyRateLimit(ip: string) {
  const now = Date.now();
  const recent = (recentIpHits.get(ip) || []).filter((time) => now - time < submissionWindowMs);
  recent.push(now);
  recentIpHits.set(ip, recent);
  return recent.length <= 5;
}

function makeDedupeKey(payload: LeadPayload) {
  return `${payload.email.toLowerCase()}::${payload.telegram.toLowerCase()}::${payload.topGeo.toLowerCase()}`;
}

function buildTelegramMessage(payload: LeadPayload, ip: string) {
  return [
    'NEW PAN LEAD',
    '',
    `Partner type: ${payload.partnerType}`,
    `Name: ${payload.name}`,
    `Company: ${payload.company || '-'}`,
    `Email: ${payload.email}`,
    `Telegram: ${payload.telegram}`,
    `Vertical: ${payload.vertical}`,
    `Traffic source: ${payload.trafficType}`,
    `Monthly volume: ${payload.monthlyVolume}`,
    `Top GEOs: ${payload.topGeo}`,
    `Preferred deal model: ${payload.dealModel}`,
    `Current need: ${payload.message}`,
    `IP: ${ip}`,
  ].join('\n');
}

async function writeFallbackLead(lead: LeadPayload, meta: Record<string, string>) {
  const dir = join(process.cwd(), '.lead-fallback');
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, 'leads.ndjson'), `${JSON.stringify({ ...lead, ...meta })}\n`, 'utf8');
}

async function postJsonWithTimeout(url: string, body: unknown, timeoutMs = 8_000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!applyRateLimit(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many submissions from this source. Please try again shortly.' }, { status: 429 });
  }

  const rawPayload = (await request.json()) as Partial<Record<LeadKey, unknown>>;
  const payload = Object.fromEntries(leadKeys.map((key) => [key, cleanString(rawPayload[key])])) as Partial<LeadPayload>;
  const validationError = validate(payload);

  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const lead = Object.fromEntries(leadKeys.map((key) => [key, payload[key] ?? ''])) as LeadPayload;
  const dedupeKey = makeDedupeKey(lead);
  const existingSubmission = recentSubmissions.get(dedupeKey);

  if (existingSubmission && Date.now() - existingSubmission < 15 * 60_000) {
    return NextResponse.json(
      {
        ok: true,
        message: 'Your brief is already in review. Please continue in Telegram if you need to add detail.',
        delivery: { telegramSent: false, webhookSent: false, storedFallback: false, deduplicated: true } satisfies SubmissionResult,
      },
      { status: 200 }
    );
  }

  recentSubmissions.set(dedupeKey, Date.now());

  const result: SubmissionResult = {
    telegramSent: false,
    webhookSent: false,
    storedFallback: false,
    deduplicated: false,
  };

  const submittedAt = new Date().toISOString();
  const safePreviewHtml = buildTelegramMessage(lead, ip)
    .split('\n')
    .map((line) => escapeHtml(line))
    .join('<br/>');

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (telegramBotToken && telegramChatId) {
    try {
      const telegramResponse = await postJsonWithTimeout(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: telegramChatId,
          text: buildTelegramMessage(lead, ip),
        }
      );
      result.telegramSent = telegramResponse.ok;
    } catch (error) {
      console.error('PAN lead telegram delivery failed', error);
    }
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await postJsonWithTimeout(webhookUrl, {
        ...lead,
        source: 'join_form',
        submittedAt,
        ip,
      });
      result.webhookSent = webhookResponse.ok;
    } catch (error) {
      console.error('PAN lead webhook delivery failed', error);
    }
  }

  if (!result.telegramSent || !result.webhookSent) {
    try {
      await writeFallbackLead(lead, {
        source: 'join_form',
        submittedAt,
        ip,
        telegramSent: String(result.telegramSent),
        webhookSent: String(result.webhookSent),
      });
      result.storedFallback = true;
    } catch (error) {
      console.error('PAN lead fallback storage failed', error);
    }
  }

  return NextResponse.json({
    ok: true,
    message:
      result.telegramSent || result.webhookSent
        ? 'Application received. Qualified briefs move into Telegram quickly when the source, GEO, and deal fit are clear.'
        : 'Application received. Delivery channels need environment setup, but the brief was stored safely for review.',
    delivery: result,
    safePreviewHtml,
  });
}
