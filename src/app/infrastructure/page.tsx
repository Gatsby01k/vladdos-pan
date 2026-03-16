import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";
import { infraCards, operatingPrinciples, stackRows } from "@/data/site";

export const metadata: Metadata = {
  title: "Infrastructure",
  description: "Operating structure for partner vetting, deal routing, reporting rhythm, and selective scale.",
};

export default function InfrastructurePage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="infrastructure"
          title="The operating structure behind qualification, routing, and selective scale."
          text="PAN functions as a private routing layer between affiliates and advertisers. This page explains the workflow that keeps partner quality, communication, and escalation under control."
        />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {infraCards.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-7">
            <div className="eyebrow">stack map</div>
            <div className="mt-4 overflow-hidden rounded-[1.8rem] border border-white/8 bg-black/15">
              <div className="grid divide-y divide-white/8">
                {stackRows.map(([label, detail]) => (
                  <div key={label} className="grid gap-3 px-5 py-4 md:grid-cols-[0.3fr_0.7fr]">
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="text-sm leading-7 text-white/72">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="panel p-7">
            <div className="eyebrow">operating principles</div>
            <div className="mt-5 space-y-3">
              {operatingPrinciples.map((item) => (
                <div key={item} className="rounded-[1.45rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/72">{item}</div>
              ))}
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
