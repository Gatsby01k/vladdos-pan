import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';

const signalPills = [
  'Curated supply',
  'Commercial screening',
  'Operator-side review',
  'Manual routing',
];

const advertiserPrinciples = [
  {
    title: 'Curated supply beats network noise',
    text: 'Selected traffic partners matter more than broad affiliate volume when partner fit, control, and commercial realism matter.',
  },
  {
    title: 'Clear conversion logic protects quality',
    text: 'Conversion definitions, payout logic, and traffic rules should be aligned before any test opens.',
  },
  {
    title: 'Operator responsiveness is part of route quality',
    text: 'Fast commercial handling improves approval speed, test planning, and the quality of partner-side conversations.',
  },
  {
    title: 'Restrictions must be stated early',
    text: 'Traffic restrictions, GEO priorities, compliance limits, and approval logic should be clear before routing begins.',
  },
];

const valueCards = [
  {
    title: 'Curated traffic partners',
    text: 'Advertisers get access to selected affiliates and traffic owners instead of a large open pool of unknown supply.',
  },
  {
    title: 'Clear commercial setup',
    text: 'Offers work better when payout logic, conversion definitions, restrictions, and source fit are defined before traffic starts.',
  },
  {
    title: 'Faster decision cycles',
    text: 'Telegram-first handling shortens the path from first brief to live discussion, test planning, and escalation.',
  },
  {
    title: 'More useful scale reviews',
    text: 'Scaling conversations should happen around source quality, approval signal, and unit economics instead of vague optimism.',
  },
];

const advertiserBriefItems = [
  'Vertical, GEO coverage, and compliance notes',
  'Offer structure and payout model',
  'What counts as a valid registration, FTD, or conversion',
  'Preferred traffic profile, restrictions, and current scale goal',
];

const reviewBlockers = [
  'No conversion definition',
  'No GEO priority',
  'No traffic restrictions',
  'No approval logic or commercial owner',
];

export const metadata: Metadata = {
  title: 'Advertiser Partnerships',
  description:
    'Advertiser partnerships for operators and brands that need curated traffic, clearer commercial setup, and faster routing.',
};

export default function ForAdvertisersPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="space-y-6">
          <SectionHeader
            eyebrow="for advertisers"
            title="Advertiser partnerships for operators and brands that need curated traffic, not public-network noise."
            text="PAN works with advertisers who want direct conversations, clearer commercial setup, and partner routing based on source, GEO, and deal fit."
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
          {advertiserPrinciples.map((item) => (
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

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((item) => (
            <div
              key={item.title}
              className="panel bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
            >
              <div className="text-base font-medium tracking-tight text-white">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what advertisers should send</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              A strong advertiser brief makes routing faster and cleaner.
            </h2>

            <div className="mt-5 grid gap-3">
              {advertiserBriefItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] px-4 py-3 text-sm leading-6 text-white/76 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-white/68">
              The goal is to define offer logic, source fit, restrictions, and
              review conditions before traffic is opened to selected partners.
            </p>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best next step</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Request an advertiser partnership review.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/72">
              Send a short brief with vertical, GEOs, payout logic, restrictions,
              and the kind of traffic route you want to open. Qualified advertisers
              move into Telegram for direct discussion.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">
                Request partnership
              </Link>
              <Link href="/contact" className="button-secondary w-full sm:w-auto">
                Contact
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what slows review down</div>
            <div className="mt-5 grid gap-3">
              {reviewBlockers.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-4 py-3 text-sm text-white/72 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-white/68">
              Weak briefs create weak routing. Missing conversion logic, vague
              restrictions, and unclear approval ownership slow everything down.
            </p>
          </div>

          <div className="panel p-6 text-center sm:p-7">
            <div className="eyebrow">advertiser qualification</div>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Ready to open curated traffic?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Submit your commercial setup. Access is reviewed manually based on
              vertical fit, payout logic, approval conditions, traffic restrictions,
              and how realistic the route looks from both sides.
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
          </div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
