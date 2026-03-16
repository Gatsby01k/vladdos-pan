import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import FaqSchema from '@/components/seo/FaqSchema';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { leadMagnets, networkStats } from '@/data/networkContent';
import { messageTemplates, siteConfig } from '@/data/site';

const joinFaqItems = [
  {
    q: 'Who should request access?',
    a: 'Affiliates, advertisers, operators, and managers with a real traffic route, acquisition need, or commercial partnership request.',
  },
  {
    q: 'What should the brief include?',
    a: 'Partner type, source, top GEOs, monthly volume or budget, preferred deal model, and the specific commercial need right now.',
  },
  {
    q: 'What happens after review?',
    a: 'Qualified applications move into Telegram for direct follow-up, deal discussion, test planning, and next-step ownership.',
  },
  {
    q: 'What slows down qualification?',
    a: 'Vague source explanations, missing GEOs, no realistic volume, and generic outreach without a usable commercial brief.',
  },
];

export const metadata: Metadata = {
  title: 'Request Network Access',
  description: 'Submit a qualified brief, trigger protected lead routing, and move strong PAN conversations into Telegram quickly.',
};

export default function JoinPage() {
  const telegramHref = `https://t.me/${siteConfig.telegramAccount.replace('@', '')}?text=${messageTemplates.telegramText}`;
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(messageTemplates.emailSubject)}&body=${messageTemplates.emailBody}`;

  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={joinFaqItems} id="join-faq-schema" />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7 lg:p-8">
            <SectionHeader
              eyebrow="request access"
              title="Structured intake for affiliates, advertisers, and operators."
              text="This page is the network's commercial intake layer. Submit the brief once, route it into Telegram quickly, and keep serious conversations moving without repetitive back-and-forth."
            />
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                'Qualified briefs get faster responses.',
                'Telegram is preferred for live deal flow.',
                'You do not need a polished media kit to apply.',
                'You do need clear source, GEO, volume, and commercial intent.',
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <LeadCaptureForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel p-5 sm:p-7 lg:p-8">
              <div className="eyebrow">how review works</div>
              <div className="mt-5 grid gap-4">
                {[
                  ['01', 'Useful brief first', 'Source, GEOs, volume, deal model, and current need are collected up front so review starts with usable information.'],
                  ['02', 'Fit review', 'PAN checks whether the route looks commercially workable before deeper discussion begins.'],
                  ['03', 'Direct next step', 'Qualified leads move into Telegram for follow-up questions, deal discussion, and route planning.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Step {step}</div>
                    <div className="mt-2 text-base font-medium text-white">{title}</div>
                    <p className="mt-2 text-sm leading-7 text-white/72">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-5 sm:p-7 lg:p-8">
              <div className="eyebrow">instant routes</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <TrackedLink
                  href={telegramHref}
                  external
                  target="_blank"
                  rel="noreferrer"
                  eventName="telegram_click"
                  eventLabel="join_page"
                  className="button-primary"
                >
                  Open Telegram
                </TrackedLink>
                <TrackedLink
                  href={emailHref}
                  external
                  eventName="email_click"
                  eventLabel="join_page"
                  className="button-secondary"
                >
                  Send by Email
                </TrackedLink>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {networkStats.map((item) => (
                  <div key={item.label} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-4">
                    <div className="text-xl font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
                    <p className="mt-2 text-sm leading-6 text-white/64">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="panel p-5 sm:p-7 lg:p-8">
          <div className="eyebrow">operating checklists</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The site should support partner acquisition instead of consuming your time.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leadMagnets.map((item) => (
              <div key={item.title} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-5">
                <div className="text-base font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
