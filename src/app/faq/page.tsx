import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import FaqSchema from '@/components/seo/FaqSchema';

const faqItems = [
  {
    q: 'What is a private affiliate network?',
    a: 'A private affiliate network is a selective partnership layer that connects qualified affiliates, advertisers, and operators without relying on a large public marketplace.',
  },
  {
    q: 'How does VlaDDoS PAN work?',
    a: 'PAN uses the site to qualify intent, collect a commercial brief, and move stronger leads into direct Telegram conversations for follow-up, deal discussion, and next-step planning.',
  },
  {
    q: 'Who can join the network?',
    a: 'Affiliates, media buyers, advertisers, operators, and managers can request access when they have a real traffic source, acquisition need, or partnership brief.',
  },
  {
    q: 'What traffic sources are reviewed?',
    a: 'The network can review SEO, paid media, influencer, Telegram, community-led, and other performance routes when the source is legitimate, transparent, and commercially relevant.',
  },
  {
    q: 'Do you work with CPA or revenue share deals?',
    a: 'Yes. PAN is built for CPA, RevShare, hybrid structures, and direct operator-side commercial models when the economics and execution fit are strong.',
  },
  {
    q: 'What speeds up approval?',
    a: 'Clear source mechanics, top GEOs, realistic monthly volume or budget, preferred deal model, and a usable brief about what you need now.',
  },
  {
    q: 'Do you work with beginner affiliates?',
    a: 'The network is optimized for counterparties who already understand traffic, qualification, and commercial follow-up. PAN is not designed as a beginner-friendly directory.',
  },
  {
    q: 'How do advertisers join?',
    a: 'Advertisers can use the join page or direct Telegram route and send their GEOs, vertical, conversion definition, payout logic, traffic preferences, restrictions, and current acquisition goals.',
  },
];

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about VlaDDoS PAN, private affiliate networks, traffic sources, advertiser access, and Telegram-based deal routing.',
  alternates: {
    canonical: 'https://vladdos.com/faq',
  },
  openGraph: {
    title: 'FAQ | VlaDDoS PAN',
    description:
      'Answers about private affiliate networks, traffic sources, CPA and RevShare models, and advertiser access.',
    url: 'https://vladdos.com/faq',
    type: 'website',
  },
};

export default function FaqPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={faqItems} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="faq"
          title="Answers for affiliates, advertisers, operators, and managers evaluating VlaDDoS PAN."
          text="This page supports trust and qualification by answering the recurring questions that appear before a serious partnership conversation starts."
          aside={<div className="text-sm leading-7 text-white/72">Best first step: use the <Link href="/join" className="text-white underline underline-offset-4">join page</Link> or the <Link href="/access" className="text-white underline underline-offset-4">access desk</Link> with a short brief.</div>}
        />

        <section className="panel p-5 sm:p-7">
          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article key={item.q} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">Question {String(index + 1).padStart(2, '0')}</div>
                <h2 className="mt-2 text-lg font-medium text-white">{item.q}</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
