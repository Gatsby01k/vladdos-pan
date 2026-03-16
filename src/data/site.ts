import { seoMoneyPages } from './seoContent';

export { seoMoneyPages };

export const siteConfig = {
  name: 'VlaDDoS',
  title: 'Private Affiliate Network',
  tagline: 'Selective affiliate routing for iGaming, crypto, and performance marketing.',
  description:
    'VlaDDoS PAN is a private affiliate network built to qualify serious affiliates, advertisers, and operators before moving them into direct Telegram-first deal flow.',
  telegramAccount: '@PAN_Affiliate',
  ownerTelegram: '@V1aDDoS',
  telegramChannel: '@PrivateAffiliateNetwork',
  telegramChat: '@pan_chats',
  email: 'hello@vladdos.com',
  instagram: '@Private_Affiliate_Network',
  x: '@PrivateAffNet',
  linkedin: 'https://www.linkedin.com/company/private-affiliate-network/',
};

export const primaryContactLinks = [
  {
    label: 'Telegram Desk',
    value: siteConfig.telegramAccount,
    href: `https://t.me/${siteConfig.telegramAccount.replace('@', '')}`,
  },
  {
    label: 'Owner Contact',
    value: siteConfig.ownerTelegram,
    href: `https://t.me/${siteConfig.ownerTelegram.replace('@', '')}`,
  },
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export const socialLinks = [
  {
    label: 'Telegram Channel',
    value: siteConfig.telegramChannel,
    href: `https://t.me/${siteConfig.telegramChannel.replace('@', '')}`,
  },
  {
    label: 'Telegram Chat',
    value: siteConfig.telegramChat,
    href: `https://t.me/${siteConfig.telegramChat.replace('@', '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'Private Affiliate Network',
    href: siteConfig.linkedin,
  },
  {
    label: 'X / Twitter',
    value: siteConfig.x,
    href: `https://x.com/${siteConfig.x.replace('@', '')}`,
  },
];

export const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/offers', label: 'Offers' },
  { href: '/for-affiliates', label: 'Affiliates' },
  { href: '/for-advertisers', label: 'Advertisers' },
  { href: '/case-studies', label: 'Cases' },
  { href: '/partners', label: 'Partners' },
  { href: '/insights', label: 'Insights' },
  { href: '/join', label: 'Join' },
];

export const heroStats = [
  { value: 'iGaming / Crypto / Performance', label: 'core verticals' },
  { value: 'CPA / Hybrid / RevShare', label: 'deal structures' },
  { value: 'SEO / Paid / Community / Influencer', label: 'traffic types' },
  { value: 'Telegram-first', label: 'qualification flow' },
];

export const pillars = [
  {
    title: 'Selective partner intake',
    text: 'We would rather review fewer serious briefs than collect mass-market submissions with weak source logic.',
  },
  {
    title: 'Direct commercial routing',
    text: 'Qualified partners move toward people who can review, test, approve, and scale instead of waiting in directory-style queues.',
  },
  {
    title: 'Structured deal flow',
    text: 'Traffic source, GEO, payout model, conversion logic, and response speed are reviewed early so weak-fit routes are filtered out fast.',
  },
];

export const brandSignals = [
  {
    title: 'Built for counterparties who already know the market',
    text: 'The site speaks to teams that understand traffic economics, not beginners looking for generic affiliate inspiration.',
  },
  {
    title: 'One primary action',
    text: 'Most pages push toward Request Access and direct Telegram handling so the site behaves like intake infrastructure, not a portfolio brochure.',
  },
  {
    title: 'Commercial clarity over decorative claims',
    text: 'The strongest pages explain fit, qualification, deal structure, and next-step logic instead of hiding behind abstract branding language.',
  },
];

export const partnerFitGroups = [
  {
    title: 'Affiliates we work with',
    items: [
      'SEO and comparison traffic',
      'Paid acquisition and media buying',
      'Influencer and creator traffic',
      'Community-led traffic and direct funnels',
    ],
  },
  {
    title: 'Advertisers and operators',
    items: [
      'Casino and betting brands',
      'Crypto and trading products',
      'Performance-led acquisition teams',
      'Direct offers needing curated traffic',
    ],
  },
  {
    title: 'What speeds up qualification',
    items: [
      'Clear top GEOs',
      'Traffic source transparency',
      'Real monthly volume or budget',
      'Fast communication and realistic deal expectations',
    ],
  },
];

export const reasonsToPartner = [
  {
    title: 'Faster access to decision-makers',
    text: 'The goal is to shorten the gap between first message and the person who can actually approve, test, or reject the route.',
  },
  {
    title: 'Better-fit offers and partners',
    text: 'PAN routes opportunities according to source, GEO, compliance limits, and commercial logic instead of throwing every brief into one public pool.',
  },
  {
    title: 'Less time wasted on weak-fit intros',
    text: 'Early filtering protects both sides from vague outreach, fake scale claims, and traffic that was never commercially usable to begin with.',
  },
];

export const capabilities = [
  {
    title: 'Affiliate qualification',
    label: '01',
    points: ['Traffic source review', 'Top GEO mapping', 'Offer and deal fit', 'Communication readiness'],
  },
  {
    title: 'Advertiser intake',
    label: '02',
    points: ['Offer structure review', 'Conversion definition', 'Source restrictions', 'Scaling conditions'],
  },
  {
    title: 'Partner routing',
    label: '03',
    points: ['Direct introductions', 'Telegram follow-up', 'Escalation path', 'Next-step ownership'],
  },
  {
    title: 'Commercial control',
    label: '04',
    points: ['CPA and hybrid logic', 'Quality thresholds', 'Test conditions', 'Relationship continuity'],
  },
  {
    title: 'Operating support',
    label: '05',
    points: ['Funnel feedback', 'Issue escalation', 'Partner communication', 'Reporting rhythm'],
  },
  {
    title: 'Selective scaling',
    label: '06',
    points: ['Priority routes first', 'Waste reduction', 'Scaling review', 'Long-term fit'],
  },
];

export const capabilityTracks = [
  {
    title: 'Traffic track',
    text: 'Review how the source works, where the users come from, and whether the route is commercially usable before opening deeper discussion.',
  },
  {
    title: 'Offer track',
    text: 'Check GEO alignment, payout structure, restrictions, and what actually counts as a valid registration, FTD, or qualified conversion.',
  },
  {
    title: 'Operations track',
    text: 'Define communication rhythm, escalation ownership, and how issues are handled once the route is live and spend starts moving.',
  },
  {
    title: 'Growth track',
    text: 'Push scale only when approval signal, economics, and responsiveness remain strong enough to support repeatable growth.',
  },
];

export const caseBlocks = [
  {
    title: 'Launch preparation',
    text: 'Useful when a partner needs a cleaner commercial setup before traffic starts moving and mistakes become expensive.',
  },
  {
    title: 'Offer selection',
    text: 'Useful when a team needs better-fit deals instead of sorting through public marketplace noise and stale partner lists.',
  },
  {
    title: 'Traffic expansion',
    text: 'Useful when a proven source is ready for more spend, wider GEO coverage, or a stronger offer mix.',
  },
  {
    title: 'Partner recovery',
    text: 'Useful when a relationship stalls because communication, escalation, or expectations break before the economics do.',
  },
  {
    title: 'Operator access',
    text: 'Useful when affiliates want a faster path into direct advertiser or operator conversations with less gatekeeping.',
  },
  {
    title: 'Commercial filtering',
    text: 'Useful when weak-fit opportunities are consuming time without producing realistic upside.',
  },
];

export const monetizationBlocks = [
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
    text: 'Scaling conversations happen around source quality, approval signal, and unit economics instead of vague optimism.',
  },
];

export const infraCards = [
  {
    title: 'Partner vetting',
    text: 'New partners are reviewed for source quality, GEO fit, communication speed, and commercial seriousness.',
  },
  {
    title: 'Deal structure',
    text: 'Commercial terms are framed around traffic reality, conversion logic, restrictions, and what scale can actually be supported.',
  },
  {
    title: 'Escalation path',
    text: 'Telegram-first communication gives routes a clear next owner instead of letting follow-up disappear in email noise.',
  },
  {
    title: 'Quality control',
    text: 'Weak briefs, vague source explanations, and unrealistic expectations are filtered before they waste operator or affiliate time.',
  },
];

export const stackRows = [
  {
    label: 'Frontend',
    value: 'Next.js 14, React 18, TypeScript, Tailwind CSS',
  },
  {
    label: 'Content model',
    value: 'Data-driven pages, SEO landings, insight articles',
  },
  {
    label: 'Lead routing',
    value: 'Telegram Bot API and webhook-based intake delivery',
  },
  {
    label: 'Deployment',
    value: 'Vercel-ready app routing with server action endpoint',
  },
];

export const operatingPrinciples = [
  'Selective routing beats open-directory noise.',
  'Qualified briefs get priority over vague outreach.',
  'Traffic source clarity matters more than inflated claims.',
  'Telegram-first handling keeps deal flow fast and accountable.',
];

export const trustPages = [
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/for-affiliates', label: 'For Affiliates' },
  { href: '/for-advertisers', label: 'For Advertisers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
];

export const telegramRoutes = [
  {
    title: 'Telegram desk',
    href: `https://t.me/${siteConfig.telegramAccount.replace('@', '')}`,
    description: 'Move a qualified conversation into direct Telegram handling faster.',
  },
  {
    title: 'Owner contact',
    href: `https://t.me/${siteConfig.ownerTelegram.replace('@', '')}`,
    description: 'Use direct owner contact for serious commercial outreach and routing questions.',
  },
  {
    title: 'Channel',
    href: `https://t.me/${siteConfig.telegramChannel.replace('@', '')}`,
    description: 'Follow PAN updates, positioning, and brand-facing Telegram activity.',
  },
  {
    title: 'Chat',
    href: `https://t.me/${siteConfig.telegramChat.replace('@', '')}`,
    description: 'Join the related community discussion layer around the project.',
  },
];

export const seoLandingPageLinks = seoMoneyPages.map((page) => ({
  href: `/${page.slug}`,
  label: page.title,
}));

export const messageTemplates = {
  telegramText: encodeURIComponent(
    'Hi, I want to request access to VlaDDoS PAN.\n\nRole:\nTraffic source:\nTop GEOs:\nMonthly volume or budget:\nPreferred deal model:\nCurrent need:'
  ),
  emailSubject: 'Request Access | VlaDDoS PAN',
  emailBody: encodeURIComponent(
    'Hi,\n\nI want to request access to VlaDDoS PAN.\n\nRole:\nTraffic source:\nTop GEOs:\nMonthly volume or budget:\nPreferred deal model:\nCurrent need:\n\nThanks,'
  ),
};
