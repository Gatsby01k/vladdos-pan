import type { Metadata } from 'next';
import { motion } from 'framer-motion';
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

export default function OffersPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
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
            {qualificationNotes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-[1.15rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-4 py-4 text-sm leading-6 text-white/72 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {routeFilters.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition hover:border-white/18 hover:bg-white/[0.05] hover:text-white/82"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offerCards.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_22px_80px_rgba(0,0,0,0.34)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)] opacity-80" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="max-w-[80%] text-xl font-medium tracking-tight text-white">
                      {offer.title}
                    </div>
                    <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/72">
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
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="panel p-5 sm:p-7"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="panel p-5 sm:p-7"
          >
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
          </motion.div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
