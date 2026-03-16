import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { partnerVerticals } from '@/data/networkContent';

const selectionRules = [
  'Clear source logic gets priority over generic intros.',
  'Fast communication matters because deal flow dies in slow follow-up.',
  'Serious counterparties give enough context to qualify fit early.',
  'PAN is intentionally selective because not every route deserves operator time.',
];

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Partner fit overview for affiliates, advertisers, operators, and PAN relationship-building.',
};

export default function PartnersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="partners"
            title="Built for a smaller number of serious relationships."
            text="This page clarifies who the network is for, what qualifies faster, and why PAN is structured around curated deal flow rather than public-directory volume."
          />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {selectionRules.map((item) => (
              <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">{item}</div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {partnerVerticals.map((group) => (
              <div key={group.title} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-base font-medium text-white">{group.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/72">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-[0.9rem] border border-white/8 bg-black/15 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
              <div className="text-base font-medium text-white">Who gets priority</div>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Partners with a clear source, defined GEOs, realistic scale expectations, and direct communication readiness move faster than generic outreach.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-black/15 p-5 sm:p-6">
              <div className="text-base font-medium text-white">Why selective matters</div>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Selectivity protects operator time, keeps introductions useful, and makes it easier to turn a brief into a real commercial decision.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href="/join" eventName="partners_cta_click" eventLabel="join" className="button-primary w-full sm:w-auto">Apply to PAN</TrackedLink>
            <TrackedLink href="/for-advertisers" eventName="partners_cta_click" eventLabel="advertisers" className="button-secondary w-full sm:w-auto">For Advertisers</TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
