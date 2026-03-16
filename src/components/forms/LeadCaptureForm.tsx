'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type FormState = {
  partnerType: string;
  name: string;
  company: string;
  email: string;
  telegram: string;
  vertical: string;
  trafficType: string;
  monthlyVolume: string;
  topGeo: string;
  dealModel: string;
  message: string;
  website: string;
  startedAt: string;
};

const initialState: FormState = {
  partnerType: '',
  name: '',
  company: '',
  email: '',
  telegram: '',
  vertical: '',
  trafficType: '',
  monthlyVolume: '',
  topGeo: '',
  dealModel: '',
  message: '',
  website: '',
  startedAt: '',
};

export default function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    startedAt: new Date().toISOString(),
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    trackEvent('lead_form_submit_started', { location: 'join_page' });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit application.');
      }
      setStatus('success');
      setMessage(data.message);
      setForm({ ...initialState, startedAt: new Date().toISOString() });
      trackEvent('lead_form_submit_success', { location: 'join_page' });
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit application.');
      trackEvent('lead_form_submit_error', { location: 'join_page' });
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="form-field">
          <span>Partner type *</span>
          <select value={form.partnerType} onChange={(e) => setForm({ ...form, partnerType: e.target.value })} required>
            <option value="">Select</option>
            <option>Affiliate</option>
            <option>Advertiser</option>
            <option>Operator / Brand</option>
            <option>Network / Agency</option>
            <option>Other</option>
          </select>
        </label>

        <label className="form-field">
          <span>Primary vertical *</span>
          <select value={form.vertical} onChange={(e) => setForm({ ...form, vertical: e.target.value })} required>
            <option value="">Select</option>
            <option>iGaming</option>
            <option>Crypto</option>
            <option>Performance marketing</option>
            <option>Multi-vertical</option>
            <option>Other</option>
          </select>
        </label>

        <label className="form-field">
          <span>Name *</span>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex / Team name" required />
        </label>
        <label className="form-field">
          <span>Company / Brand</span>
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Brand / network / project" />
        </label>
        <label className="form-field">
          <span>Email *</span>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required />
        </label>
        <label className="form-field">
          <span>Telegram *</span>
          <input value={form.telegram} onChange={(e) => setForm({ ...form, telegram: e.target.value })} placeholder="@handle" required />
        </label>
        <label className="form-field">
          <span>Traffic source / acquisition model *</span>
          <input value={form.trafficType} onChange={(e) => setForm({ ...form, trafficType: e.target.value })} placeholder="SEO / Telegram / PPC / influencer / direct" required />
        </label>
        <label className="form-field">
          <span>Monthly volume or budget *</span>
          <input value={form.monthlyVolume} onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })} placeholder="50k clicks / $20k budget / 500 FTD intent" required />
        </label>
        <label className="form-field">
          <span>Preferred deal model *</span>
          <input value={form.dealModel} onChange={(e) => setForm({ ...form, dealModel: e.target.value })} placeholder="CPA / Hybrid / RevShare / custom" required />
        </label>
        <label className="form-field">
          <span>Top GEOs *</span>
          <input value={form.topGeo} onChange={(e) => setForm({ ...form, topGeo: e.target.value })} placeholder="UK / CA / DE" required />
        </label>
        <label className="form-field md:col-span-2">
          <span>Current need *</span>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Explain what you need now: direct operator access, better-fit offer, source review, GEO expansion, test launch, or advertiser-side intake." rows={5} required />
        </label>
      </div>

      <div className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/64">
        Clear source + GEO + volume + deal model = faster qualification. Telegram is preferred for active commercial flow.
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="button-primary w-full sm:w-auto" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Send Qualified Brief'}
        </button>
        <div className="rounded-[1rem] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/58">
          Structured submissions trigger Telegram alerts, webhook intake, and anti-spam screening.
        </div>
      </div>

      {message ? <div className={status === 'success' ? 'status-success' : 'status-error'}>{message}</div> : null}
    </form>
  );
}
