import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import { brandSignals, pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About VlaDDoS PAN and how the private affiliate network is structured.",
};

export default function AboutPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="about"
          title="A private affiliate network built around fit, speed, and direct commercial routing."
          text="VlaDDoS PAN is designed to connect selected affiliates, operators, and advertisers through cleaner intake, faster qualification, and more practical deal flow."
        />
        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {brandSignals.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
