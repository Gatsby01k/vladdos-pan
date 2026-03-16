import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { monetizationBlocks } from '@/data/site';

const advertiserSignals = [
  'Curated supply beats broad network noise when partner fit matters.',
  'Clear conversion logic protects both traffic quality and payout discussions.',
  'Operator-side responsiveness is part of the offer quality, not a side issue.',
  'Traffic restrictions, GEO priorities, and approval logic should be stated before tests open.',
];

export const metadata: Metadata = {
  title: 'Advertiser Partnerships',
  description: 'Advertiser partnerships for operators and brands seeking curated traffic supply and direct affiliate relationships.',
};

export default function ForAdvertisersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="for advertisers"
          title="Advertiser partnerships for operators and brands that need curated traffic, not public-network noise."
          text="VlaDDoS PAN works with advertisers who want direct conversations, clearer commercial setup, and partner routing based on source, GEO, and deal fit."
        />

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {advertiserSignals.map((item) => (
            <div key={item} className="panel p-5 text-sm leading-7 text-white/72">{item}</div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {monetizationBlocks.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what advertisers should send</div>
            <div className="mt-5 grid gap-3">
              {[
                'Vertical, GEO coverage, and compliance notes',
                'Offer structure and payout model',
                'What counts as a valid registration, FTD, or conversion',
                'Preferred traffic profile, restrictions, and current scale goal',
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">{item}</div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best next step</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">Request an advertiser partnership review.</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Send a short brief with vertical, GEOs, payout logic, restrictions, and the kind of traffic route you want to open. Qualified advertisers move into Telegram for direct discussion.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">Request Partnership</Link>
              <Link href="/contact" className="button-secondary w-full sm:w-auto">Contact</Link>
            </div>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
