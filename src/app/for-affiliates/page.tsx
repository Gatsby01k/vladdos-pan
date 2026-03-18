import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { partnerFitGroups, reasonsToPartner } from '@/data/site';

const signalPills = [
  'Selective access',
  'Operator-side routing',
  'Traffic qualification',
  'Manual review',
];

const affiliateReality = [
  {
    title: 'Direct access beats marketplace noise',
    text: 'Operator-side conversations matter more than generic listing volume when commercial fit and speed actually matter.',
  },
  {
    title: 'Source clarity speeds approvals',
    text: 'Clear traffic mechanics reduce back-and-forth, weak-fit intros, and slow reviews that go nowhere.',
  },
  {
    title: 'Commercial fit comes first',
    text: 'CPA, Hybrid, RevShare, and test routes depend on source logic, GEO alignment, and realistic scale potential.',
  },
  {
    title: 'Selective access protects both sides',
    text: 'The network is built for fit and execution, not for collecting every affiliate application that comes in.',
  },
];

const affiliateBriefItems = [
  'Traffic type and source mechanics',
  'Top GEOs and vertical focus',
  'Current monthly volume or budget',
  'Offer, payout model, or operator access needed',
];

const reviewSlowdowns = [
  'No source explanation',
  'No GEO logic',
  'No realistic monthly volume',
  'No clear commercial ask',
];

export const metadata: Metadata = {
  title: 'Affiliate Partnerships',
  description:
    'Affiliate partnerships for SEO, paid traffic, media buying, creator, and community-led teams looking for direct routing and faster qualification.',
};

export default function ForAffiliatesPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="space-y-6">
          <SectionHeader
            eyebrow="for affiliates"
            title="Affiliate partnerships built for teams that already know how traffic works."
            text="PAN works with affiliates, media buyers, creators, and community operators who need direct access, cleaner routing, and faster qualification."
          />

          <div className="flex flex-wrap gap-3">
            {signalPills.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/62"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {affiliateReality.map((item) => (
            <div
              key={item.title}
              className="panel bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="text-base font-medium tracking-tight text-white">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">affiliate profiles we work with</div>
            <div className="mt-5 grid gap-3">
              {partnerFitGroups[0]?.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] px-4 py-3 text-sm text-white/78 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">advertiser-side demand</div>
            <div className="mt-5 grid gap-3">
              {partnerFitGroups[1]?.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] px-4 py-3 text-sm text-white/78 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {reasonsToPartner.map((item) => (
            <div
              key={item.title}
              className="panel bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.18)] sm:p-6"
            >
              <div className="text-base font-medium tracking-tight text-white sm:text-lg">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what to include</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              A strong affiliate brief is short, specific, and commercially useful.
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {affiliateBriefItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] px-4 py-3 text-sm leading-6 text-white/72 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">
                Request affiliate access
              </Link>
              <Link
                href="https://t.me/PAN_Affiliate"
                target="_blank"
                rel="noreferrer"
                className="button-secondary w-full sm:w-auto"
              >
                Open Telegram
              </Link>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what slows review down</div>
            <div className="mt-5 grid gap-3">
              {reviewSlowdowns.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-4 py-3 text-sm text-white/72 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-white/68">
              PAN is built for affiliates who can explain where users come from,
              what they want to test, and why the route should exist commercially.
            </p>
          </div>
        </section>

        <section className="panel p-6 text-center sm:p-7">
          <div className="eyebrow">affiliate qualification</div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Ready to be qualified?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Submit your traffic profile. Access is reviewed manually based on source
            logic, GEO fit, commercial structure, and whether the route makes sense
            for both sides.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/join" className="button-primary w-full sm:w-auto">
              Request access
            </Link>
            <Link
              href="https://t.me/PAN_Affiliate"
              target="_blank"
              rel="noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              Open Telegram
            </Link>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
