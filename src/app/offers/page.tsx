import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { offerCards } from '@/data/networkContent';

const dealStructures = ['CPA', 'RevShare', 'Hybrid deals', 'Performance tiers', 'Custom operator agreements'];
const qualificationNotes = [
  'Best routes have clear source mechanics and realistic scale logic.',
  'Final terms depend on GEO, conversion definition, traffic restrictions, and approval quality.',
  'Not every offer is open to every traffic type. That is the point of qualification.',
];

export const metadata: Metadata = {
  title: 'Private Offers',
  description: 'PAN offer board for affiliates and advertisers looking for faster qualification, clearer deal structures, and direct Telegram routing.',
};

export default function OffersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="offers"
            title="Curated offers and traffic routes, not a vague positioning page."
            text="These cards are built to help serious affiliates and advertisers self-qualify before a Telegram discussion starts. They do not expose every term, but they make source fit, GEO direction, and commercial intent clear."
          />
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {qualificationNotes.map((item) => (
              <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">{item}</div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offerCards.map((offer) => (
              <div key={offer.title} className="rounded-[1.3rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-xl font-medium text-white">{offer.title}</div>
                <div className="mt-4 grid gap-3 text-sm text-white/72">
                  <div><span className="text-white/88">GEO:</span> {offer.geo}</div>
                  <div><span className="text-white/88">Model:</span> {offer.model}</div>
                  <div><span className="text-white/88">Traffic:</span> {offer.traffic}</div>
                  <div><span className="text-white/88">Best fit:</span> {offer.fit}</div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink href="/join" eventName="offer_apply_click" eventLabel={offer.title} className="button-primary w-full sm:w-auto">Apply for this route</TrackedLink>
                  <TrackedLink href="/contact" eventName="offer_contact_click" eventLabel={offer.title} className="button-secondary w-full sm:w-auto">Ask a question</TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">offer categories</div>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {[
                'iGaming operators and casino acquisition campaigns',
                'Crypto exchanges, casinos, and Web3 products',
                'Trading and fintech acquisition funnels',
                'Sweepstakes and social casino campaigns',
                'Performance lead generation programs',
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3">{item}</div>
              ))}
            </div>
          </div>
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">deal structures</div>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {dealStructures.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3">{item}</div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Final terms depend on source quality, GEO fit, advertiser requirements, compliance limits, and the kind of scale the route can realistically support.
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
