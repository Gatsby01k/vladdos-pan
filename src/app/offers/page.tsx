import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { offerCards } from '@/data/networkContent';

const dealStructures = [
  'CPA',
  'RevShare',
  'Hybrid deals',
  'Performance tiers',
  'Custom operator agreements',
];

const qualificationNotes = [
  'Source logic matters more than raw volume.',
  'Terms shift by GEO, traffic quality, conversion rules, and approval fit.',
  'This is not an open marketplace. Access depends on traffic type and route fit.',
];

const signalPills = [
  'Controlled access',
  'Direct routing',
  'Private deal flow',
  'Fast qualification',
];

const routeFilters = ['Tier 1', 'Crypto', 'SEO', 'Telegram', 'CPA', 'Hybrid'];

export const metadata: Metadata = {
  title: 'Active Offers',
  description:
    'Private offer board for affiliates and advertisers looking for direct routing, controlled access, and faster qualification.',
};

type OffersPageProps = {
  searchParams?: {
    filter?: string;
  };
};

function matchesFilter(
  offer: {
    title: string;
    geo: string;
    model: string;
    traffic: string;
    fit: string;
    status: string;
  },
  filter: string | null,
) {
  if (!filter) return true;

  const haystack = [
    offer.title,
    offer.geo,
    offer.model,
    offer.traffic,
    offer.fit,
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(filter.toLowerCase());
}

function getStatusClass(status: string) {
  const normalized = status.toLowerCase();

  if (normalized === 'scaling') {
    return 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200';
  }

  if (normalized === 'testing') {
    return 'border-amber-300/20 bg-amber-300/10 text-amber-100';
  }

  if (normalized === 'limited') {
    return 'border-white/12 bg-white/[0.04] text-white/72';
  }

  return 'border-white/12 bg-white/[0.04] text-white/72';
}

export default function OffersPage({ searchParams }: OffersPageProps) {
  const currentFilter =
    searchParams?.filter && routeFilters.includes(searchParams.filter)
      ? searchParams.filter
      : null;

  const filteredOffers = offerCards.filter((offer) =>
    matchesFilter(offer, currentFilter),
  );

  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="offers"
            title="Active routes, not public listings."
            text="These are controlled traffic flows with defined source logic, GEO fit, and realistic scaling conditions. The goal is simple: make fit clear before any Telegram conversation starts."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {signalPills.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/62"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {qualificationNotes.map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-4 py-4 text-sm leading-6 text-white/72 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {routeFilters.map((item) => {
              const isActive = currentFilter === item;

              return (
                <Link
                  key={item}
                  href={isActive ? '/offers' : `/offers?filter=${encodeURIComponent(item)}`}
                  className={`rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition ${
                    isActive
                      ? 'border-white/20 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
                      : 'border-white/10 bg-white/[0.025] text-white/60 hover:border-white/18 hover:bg-white/[0.05] hover:text-white/82'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filteredOffers.map((offer) => (
              <div
                key={offer.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_22px_80px_rgba(0,0,0,0.34)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)] opacity-60 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="max-w-[80%] text-xl font-medium tracking-tight text-white">
                      {offer.title}
                    </div>

                    <div
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] ${getStatusClass(
                        offer.status,
                      )}`}
                    >
                      {offer.status}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm leading-7 text-white/72">
                    <div>
                      <span className="text-white/88">GEO:</span> {offer.geo}
                    </div>
                    <div>
                      <span className="text-white/88">Model:</span> {offer.model}
                    </div>
                    <div>
                      <span className="text-white/88">Traffic:</span> {offer.traffic}
                    </div>
                    <div>
                      <span className="text-white/88">Route fit:</span> {offer.fit}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <TrackedLink
                      href="/join"
                      eventName="offer_apply_click"
                      eventLabel={offer.title}
                      className="button-primary w-full sm:w-auto"
                    >
                      Request access
                    </TrackedLink>

                    <TrackedLink
                      href="/contact"
                      eventName="offer_contact_click"
                      eventLabel={offer.title}
                      className="button-secondary w-full sm:w-auto"
                    >
                      Ask about this route
                    </TrackedLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.18)]">
              <div className="text-lg font-medium tracking-tight text-white">
                No matching routes.
              </div>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Try another filter or request custom access. Not every active route is shown publicly.
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <TrackedLink href="/join" className="button-primary w-full sm:w-auto">
                  Request custom route
                </TrackedLink>

                <TrackedLink
                  href="https://t.me/PAN_Affiliate"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary w-full sm:w-auto"
                >
                  Open Telegram
                </TrackedLink>
              </div>
            </div>
          )}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">route categories</div>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {[
                'iGaming acquisition routes',
                'Crypto casino and Web3 traffic flows',
                'Trading and fintech funnels',
                'Sweepstakes and social casino deals',
                'Performance lead generation programs',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">deal structures</div>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {dealStructures.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.025] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-white/72">
              Final terms depend on source quality, GEO alignment, advertiser rules,
              compliance limits, and the scale the route can actually support.
            </p>
          </div>
        </section>

        <section className="panel p-6 text-center sm:p-7">
          <div className="eyebrow">custom routing</div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Don’t see your route?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Submit your setup. Traffic is matched manually based on source logic,
            GEO fit, commercial structure, and how realistic the scale path looks.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink href="/join" className="button-primary w-full sm:w-auto">
              Request custom route
            </TrackedLink>

            <TrackedLink
              href="https://t.me/PAN_Affiliate"
              target="_blank"
              rel="noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              Open Telegram
            </TrackedLink>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
