import { TrackedLink } from '@/components/analytics/TrackedLink';
import { primaryContactLinks, siteConfig, socialLinks, trustPages } from '@/data/site';

const internalLinks = [
  { href: '/', label: 'Overview' },
  { href: '/offers', label: 'Offers' },
  { href: '/for-affiliates', label: 'Affiliates' },
  { href: '/for-advertisers', label: 'Advertisers' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/partners', label: 'Partners' },
  { href: '/insights', label: 'Insights' },
  { href: '/join', label: 'Join' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = trustPages.filter((item) =>
  ['/about', '/faq', '/privacy-policy', '/terms', '/cookie-policy'].includes(item.href)
);

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/88">
              VlaDDoS PAN
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/66">
              Private affiliate network for selected affiliates, operators, and performance
              advertisers across iGaming, crypto, and acquisition marketing.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/54">
                Curated intake
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/54">
                Telegram-first
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/54">
                Direct deals
              </span>
            </div>

            <div className="mt-5 rounded-[1rem] border border-white/8 bg-black/20 p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/46">
                Best first route
              </div>
              <p className="mt-2 text-sm leading-6 text-white/64">
                Start at <span className="text-white/88">{siteConfig.telegramAccount}</span> or use
                the join page for a structured brief.
              </p>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">Site</div>
            <div className="mt-4 space-y-3 text-sm text-white/76">
              {internalLinks.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  eventName="footer_nav_click"
                  eventLabel={item.href}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </TrackedLink>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">Contact</div>
            <div className="mt-4 space-y-3">
              {primaryContactLinks.map((item) => {
                const isExternal = item.href.startsWith('http');

                return (
                  <TrackedLink
                    key={item.label}
                    href={item.href}
                    external={isExternal}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    eventName={
                      item.label.toLowerCase().includes('telegram') ? 'telegram_click' : 'email_click'
                    }
                    eventLabel="footer"
                    className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 text-sm text-white/76 transition hover:border-white/14 hover:text-white"
                  >
                    <div className="text-[10px] uppercase tracking-[0.14em] text-white/46">
                      {item.label}
                    </div>
                    <div className="mt-2">{item.value}</div>
                  </TrackedLink>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">
              Community / Legal
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/76">
              {socialLinks.map((item) => (
                <TrackedLink
                  key={item.label}
                  href={item.href}
                  external
                  target="_blank"
                  rel="noreferrer"
                  eventName="social_click"
                  eventLabel={item.label}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </TrackedLink>
              ))}

              {legalLinks.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  eventName="footer_legal_click"
                  eventLabel={item.href}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 VlaDDoS / Private Affiliate Network</div>
          <div className="text-white/32">Selected partners / direct routing / commercial clarity</div>
        </div>
      </div>
    </footer>
  );
}
