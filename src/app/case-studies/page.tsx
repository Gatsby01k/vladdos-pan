import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { caseStudies } from '@/data/networkContent';

const signalPills = [
  'Proof of fit',
  'Private routing',
  'Faster qualification',
  'Commercial clarity',
];

const proofPoints = [
  {
    title: 'Private screening reduces weak-fit intros',
    text: 'The first gain is not scale. It is removing bad-fit conversations before they waste time on both sides.',
  },
  {
    title: 'Source clarity speeds commercial decisions',
    text: 'When traffic type, GEO intent, and commercial goal are clear early, routing becomes faster and more useful.',
  },
  {
    title: 'Direct routing improves escalation quality',
    text: 'Better partner-side communication shortens the distance between first brief, test logic, and real next-step review.',
  },
];

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'PAN case-study proof blocks showing how private qualification improves routing, reduces weak-fit intros, and creates cleaner deal flow.',
};

export default function CaseStudiesPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="proof"
            title="Proof that private routing creates cleaner deal flow."
            text="These cases show how PAN handles source fit, faster qualification, and partner-side routing when open-network conversations create too much noise."
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

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_22px_80px_rgba(0,0,0,0.34)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)] opacity-60 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="text-lg font-medium tracking-tight text-white sm:text-xl">
                    {item.title}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-white/68">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[0.95rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((item) => (
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

        <section className="panel p-6 text-center sm:p-7">
          <div className="eyebrow">what these cases prove</div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Want the same kind of routing?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Submit your setup. PAN matches traffic, offers, and partner-side
            conditions manually to reduce noise and improve the quality of the next step.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/join"
              eventName="case_study_cta_click"
              eventLabel="case-studies"
              className="button-primary w-full sm:w-auto"
            >
              Request access
            </TrackedLink>

            <TrackedLink
              href="/offers"
              eventName="case_study_cta_click"
              eventLabel="offers"
              className="button-secondary w-full sm:w-auto"
            >
              View offers
            </TrackedLink>

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
