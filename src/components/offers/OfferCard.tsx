import type { Offer } from "@/data/offers";
import Link from "next/link";

const statusMap = {
  limited: "Limited",
  testing: "Testing",
  scaling: "Scaling",
};

export default function OfferCard({
  title,
  geo,
  model,
  traffic,
  entry,
  scale,
  status,
  summary,
}: Offer) {
  return (
    <article className="rounded-[2rem] border border-white/15 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
          {statusMap[status]}
        </span>
      </div>

      <div className="space-y-3 text-[15px] leading-7 text-white/78">
        <p>
          <span className="text-white">GEO:</span> {geo.join(" / ")}
        </p>
        <p>
          <span className="text-white">Model:</span> {model}
        </p>
        <p>
          <span className="text-white">Traffic:</span> {traffic.join(", ")}
        </p>
        <p>
          <span className="text-white">Entry:</span> {entry}
        </p>
        <p>
          <span className="text-white">Scale:</span> {scale}
        </p>
      </div>

      <p className="mt-5 text-[15px] leading-7 text-white/72">{summary}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/join"
          className="inline-flex min-h-14 items-center justify-center rounded-[1.15rem] border border-[#a32014] bg-[#5b100d] px-5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#c62c1d] hover:bg-[#6a1510]"
        >
          Request access
        </Link>

        <Link
          href="https://t.me/PAN_Affiliate"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 items-center justify-center rounded-[1.15rem] border border-white/12 bg-white/[0.02] px-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/78 transition hover:border-white/20 hover:text-white"
        >
          Ask a question
        </Link>
      </div>
    </article>
  );
}
