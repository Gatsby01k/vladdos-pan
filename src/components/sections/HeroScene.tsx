import { TrackedLink } from '@/components/analytics/TrackedLink';
import { siteConfig } from '@/data/site';

const trafficSources = ['SEO', 'Paid Media', 'Influencers', 'Communities'];
const routedTo = ['Casino', 'Betting', 'Crypto', 'Performance'];

export default function HeroScene() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:items-stretch">
      <div className="glass-hero relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(222,18,2,0.14),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.05),transparent_18%)]" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="eyebrow">private affiliate network</div>

          <h1 className="mt-4 max-w-4xl text-[2.2rem] font-semibold leading-[0.96] text-white sm:text-5xl lg:text-[4.25rem]">
            Private affiliate network for serious iGaming and crypto deal flow.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            Selective partner routing for affiliates, operators, and performance advertisers
            moving through direct Telegram-first intake.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/join"
              eventName="hero_cta_click"
              eventLabel="request_access"
              className="button-primary w-full sm:w-auto"
            >
              Request Access
            </TrackedLink>

            <TrackedLink
              href={`https://t.me/${siteConfig.telegramAccount.replace('@', '')}`}
              external
              target="_blank"
              rel="noreferrer"
              eventName="telegram_click"
              eventLabel="hero"
              className="button-secondary w-full sm:w-auto"
            >
              Open Telegram
            </TrackedLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/58">
              Curated intake
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/58">
              Telegram-first routing
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-white/72">
              Clear source, GEO, volume, and commercial logic get reviewed faster.
            </div>
            <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-white/72">
              Built for direct partner routing, not vague outreach or open-directory noise.
            </div>
          </div>
        </div>
      </div>

      <div className="glass-hero relative overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]" />

        <div className="relative flex h-full min-h-[360px] flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,12,16,0.88),rgba(8,8,11,0.94))] p-5 sm:min-h-[420px] sm:p-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
              Routing model
            </div>

            <div className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Traffic in.
              <br />
              Qualified routing out.
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/64">
              PAN sits between traffic supply and commercial decision-makers, filtering weak-fit
              outreach before it wastes time on either side.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                Traffic sources
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {trafficSources.map((item) => (
                  <div
                    key={item}
                    className="rounded-[0.95rem] border border-white/8 bg-black/20 px-3 py-3 text-sm text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-full border border-[rgba(255,90,60,0.28)] bg-[rgba(120,18,10,0.28)] px-5 py-3 text-xs font-medium uppercase tracking-[0.24em] text-white/88 shadow-[0_0_40px_rgba(180,32,12,0.18)]">
                PAN Routing
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                Operators / advertisers
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {routedTo.map((item) => (
                  <div
                    key={item}
                    className="rounded-[0.95rem] border border-white/8 bg-black/20 px-3 py-3 text-sm text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                Intake
              </div>
              <div className="mt-2 text-sm text-white/82">Traffic source, GEO, volume</div>
            </div>

            <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                Routing
              </div>
              <div className="mt-2 text-sm text-white/82">Fit, restrictions, deal model</div>
            </div>

            <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                Follow-up
              </div>
              <div className="mt-2 text-sm text-white/82">Direct Telegram execution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
