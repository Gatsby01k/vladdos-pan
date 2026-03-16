import type { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import BackgroundShell from '@/components/ui/BackgroundShell';
import SectionHeader from '@/components/ui/SectionHeader';
import TopNav from '@/components/navigation/TopNav';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import HeroScene from '@/components/sections/HeroScene';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { insightArticles } from '@/data/seoContent';
import { caseStudies, networkStats, offerCards, partnerVerticals } from '@/data/networkContent';

export const metadata: Metadata = {
  title: 'Private Affiliate Network for iGaming and Crypto Traffic',
  description:
    'Private affiliate network connecting selected affiliates, operators, and performance advertisers across iGaming, crypto, and acquisition marketing.',
};

const trustSignals = [
  { label: 'Core verticals', value: 'iGaming / Crypto / Performance' },
  { label: 'Deal models', value: 'CPA / Hybrid / RevShare' },
  { label: 'Main channel', value: 'Telegram + structured intake' },
  { label: 'Access model', value: 'Selective qualification' },
];

const process = [
  'Affiliate or advertiser submits a brief with source, GEOs, deal model, volume, and current need.',
  'PAN reviews fit fast and filters out weak or vague routes before wasting operator or affiliate time.',
  'Qualified conversations move into direct Telegram follow-up, deal discussion, test planning, and scale review.',
];

const qualificationSignals = [
  'Clear traffic source and source mechanics',
  'Top GEOs and vertical focus stated directly',
  'Real monthly volume, budget, or test capacity',
  'Preferred deal model and current commercial need',
];

const notForEveryone = [
  'Beginner outreach without a source or acquisition plan',
  'Mass applications with no GEO, no volume, and no commercial context',
  'Traffic that cannot be explained, reviewed, or supported operationally',
  'Partners who need a public directory more than a private routing layer',
];

export default function HomePage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:space-y-20 sm:px-6 sm:pt-28 lg:px-8">
        <HeroScene />

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
              <div className="mt-3 text-lg font-medium text-white sm:text-xl">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="how the network works"
            title="A private routing layer built to move the right partners into real deal flow faster."
            text="VlaDDoS PAN is not designed to look like the biggest marketplace. It is designed to qualify stronger briefs, reduce weak-fit intros, and move serious counterparties into direct commercial conversations quickly."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {networkStats.map((item) => (
              <div key={item.label} className="panel p-5 sm:p-6">
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">partnership flow</div>
            <div className="mt-5 grid gap-3">
              {process.map((item, index) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">
                  <span className="mr-2 text-white/88">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {qualificationSignals.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href="/join" eventName="homepage_cta_click" eventLabel="request_access" className="button-primary w-full sm:w-auto">Request Access</TrackedLink>
              <TrackedLink href="/offers" eventName="homepage_cta_click" eventLabel="offers" className="button-secondary w-full sm:w-auto">View Offers</TrackedLink>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">who this is for</div>
            <div className="mt-5 grid gap-4">
              {partnerVerticals.slice(0, 2).map((group) => (
                <div key={group.title} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <div className="text-base font-medium text-white sm:text-lg">{group.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/72">{group.items.join(' • ')}</p>
                </div>
              ))}
              <div className="rounded-[1.25rem] border border-white/8 bg-black/15 p-4 sm:p-5">
                <div className="text-base font-medium text-white sm:text-lg">Not for everyone</div>
                <ul className="mt-3 grid gap-2 text-sm text-white/72">
                  {notForEveryone.map((item) => (
                    <li key={item} className="rounded-[0.95rem] border border-white/8 bg-white/[0.03] px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="commercial pages"
            title="Core pages answer the practical questions before the first chat starts."
            text="Offers, case studies, partner-fit pages, and direct intake reduce repetitive back-and-forth and make the site work like commercial infrastructure instead of a static brochure."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Offers page', text: 'Shows the kind of campaigns, source fit, payout structures, and routes the network actually wants to discuss.', href: '/offers', cta: 'Open Offers' },
              { title: 'Case studies', text: 'Adds practical examples around source, GEO, need, and why the route was commercially viable.', href: '/case-studies', cta: 'Open Cases' },
              { title: 'Partners page', text: 'Clarifies which counterparties fit the network, who gets priority, and what speeds up qualification.', href: '/partners', cta: 'Open Partners' },
            ].map((item) => (
              <div key={item.title} className="panel p-5 sm:p-6">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                <TrackedLink href={item.href} eventName="homepage_page_click" eventLabel={item.href} className="button-secondary mt-6 w-full sm:w-auto">{item.cta}</TrackedLink>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {offerCards.slice(0, 2).map((offer) => (
            <div key={offer.title} className="panel p-5 sm:p-6">
              <div className="eyebrow">sample route</div>
              <div className="mt-3 text-xl font-medium text-white">{offer.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{offer.fit}</p>
              <div className="mt-4 text-sm text-white/64">{offer.geo} • {offer.model}</div>
            </div>
          ))}
        </section>

        <QuickContactPanel />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">authority layer</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Insights support discovery, but every serious path still points back to Request Access.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
              The insights hub covers affiliate traffic, operator partnerships, and private-network positioning. The goal is to capture search intent, answer the right question, and route the right reader into a direct conversation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href="/insights" eventName="homepage_cta_click" eventLabel="insights" className="button-primary w-full sm:w-auto">Open Insights</TrackedLink>
              <TrackedLink href="/private-affiliate-network" eventName="homepage_cta_click" eventLabel="private-network" className="button-secondary w-full sm:w-auto">Private Network Page</TrackedLink>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">featured articles</div>
            <div className="mt-5 grid gap-3">
              {insightArticles.slice(0, 6).map((article) => (
                <TrackedLink key={article.slug} href={`/insights/${article.slug}`} eventName="insight_click" eventLabel={article.slug} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/78 transition hover:border-white/16 hover:text-white">
                  {article.title}
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.summary}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </BackgroundShell>
  );
}
