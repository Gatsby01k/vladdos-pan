export type Offer = {
  id: string;
  title: string;
  geo: string[];
  model: string;
  traffic: string[];
  entry: string;
  scale: string;
  status: "limited" | "testing" | "scaling";
  summary: string;
};

export const offers: Offer[] = [
  {
    id: "crypto-casino-tier1",
    title: "Crypto Casino - Tier 1",
    geo: ["UK", "CA", "DE", "Nordics"],
    model: "CPA up to $120 / Hybrid available",
    traffic: ["SEO", "Telegram", "Community", "Media buying"],
    entry: "Medium",
    scale: "High",
    status: "scaling",
    summary:
      "Built for affiliates already running crypto or casino-intent traffic with clear source mechanics and real volume.",
  },
  {
    id: "igaming-direct-high-intent",
    title: "iGaming Direct - High intent",
    geo: ["Tier 1", "Tier 2 mix"],
    model: "CPA / RevShare / custom tests",
    traffic: ["SEO", "PPC", "Comparison sites", "Content"],
    entry: "Medium",
    scale: "High",
    status: "testing",
    summary:
      "Best suited for direct-response traffic with strong intent, clean qualification, and room for controlled scaling.",
  },
  {
    id: "performance-offers-fast-qualification",
    title: "Performance Offers - Fast qualification",
    geo: ["Multi-geo"],
    model: "CPA with scaling reviews",
    traffic: ["Paid traffic", "Funnels", "Performance buying"],
    entry: "High",
    scale: "Medium",
    status: "limited",
    summary:
      "For buyers who can explain source logic, funnel structure, compliance boundaries, and the exact test they want to run.",
  },
  {
    id: "telegram-led-community-routes",
    title: "Telegram-led Community Routes",
    geo: ["Crypto-friendly", "Mixed-regulation GEOs"],
    model: "Hybrid / custom structures",
    traffic: ["Telegram", "Community funnels", "Creator-led traffic"],
    entry: "Medium",
    scale: "Medium",
    status: "testing",
    summary:
      "Built for community owners with trust-heavy audiences and advertisers ready for direct communication and support.",
  },
];
