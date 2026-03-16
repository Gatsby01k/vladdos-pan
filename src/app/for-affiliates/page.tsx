import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { partnerFitGroups, reasonsToPartner } from '@/data/site';

const affiliateReality = [
  'Direct operator conversations matter more than generic marketplace listings.',
  'Clear source transparency speeds up approvals and reduces useless back-and-forth.',
  'Strong briefs get faster feedback on CPA, Hybrid, RevShare, and test routes.',
  'The network is built for fit and speed, not for collecting every affiliate application.',
];

const notIdeal = [
  'No source explanation',
  'No GEO logic',
  'No realistic monthly volume',
  'No clear commercial ask',
];

export const metadata: Metadata = {
  title: 'Affiliate Partnerships',
  description: 'Affiliate partnerships for SEO, paid traffic, media buying, influencer, and community-led traffic teams.',
};

export default function ForAffiliatesPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="for affiliates"
          title="Affiliate partnerships built for teams that already know how to move traffic."
          text="VlaDDoS PAN works with affiliates, media buyers, creators, and community owners who want better-fit offers, direct conversations, and faster qualification."
        />

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {affiliateReality.map((item) => (
            <div key={item} className="panel p-5 text-sm leading-7 text-white/72">{item}</div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          {partnerFitGroups.slice(0, 2).map((group) => (
            <div key={group.title} className="panel p-5 sm:p-7">
              <div className="eyebrow">{group.title}</div>
              <div className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {reasonsToPartner.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what to include</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">A strong affiliate brief is short, specific, and commercially useful.</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                'Traffic type and source mechanics',
                'Top GEOs and vertical focus',
                'Current monthly volume or budget',
                'Offer, payout model, or operator access needed',
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">Apply for Affiliate Access</Link>
              <Link href="/telegram" className="button-secondary w-full sm:w-auto">Open Telegram</Link>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what slows review down</div>
            <div className="mt-5 grid gap-3">
              {notIdeal.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72">{item}</div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-white/68">
              PAN is built for affiliates who can explain where users come from, what they want to test, and why the route should exist commercially.
            </p>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
