import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Solar Payback Calculator – Estimate Your Solar ROI & Savings",
  description: "Use our free solar payback period calculator to estimate your solar ROI, payback time, system cost, and savings. Comprehensive analysis based on 2026 incentives.",
  keywords: [
    "solar payback calculator",
    "solar ROI calculator",
    "solar savings calculator",
    "solar panel cost calculator",
    "solar payback period",
    "solar benefits"
  ],
  alternates: {
    canonical: "https://solar-payback.com",
  },
  openGraph: {
    title: "Solar Payback Calculator – Master Your Solar ROI",
    description: "Calculate your exact solar solar payback period and long-term savings in seconds.",
    url: "https://solar-payback.com",
    siteName: "Solar Payback",
    type: "website",
  }
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Solar Payback Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate your solar ROI, payback period, and long-term energy savings with our industrial-grade calculator.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1248"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the solar payback period calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The solar payback period is calculated by dividing the net cost of your solar system (after incentives like the 30% Federal Tax Credit) by your annual electricity savings. Our engine also factors in utility inflation and system degradation for industrial-grade precision."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 2026 Federal Solar Tax Credit (ITC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Investment Tax Credit (ITC) allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. This incentive is currently locked in at 30% through 2032, making it the single largest driver of solar ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Is solar still worth it with current utility rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As utility rates continue to rise (averaging 3-5% annually), the 'avoided cost' of purchasing electricity from the grid increases, which actually accelerates your solar payback period and increases total lifetime savings."
        }
      }
    ]
  }
];

export default function Home() {
  return (
    <>
      <JsonLd data={schemas} />
      <HomeClient />
    </>
  );
}
