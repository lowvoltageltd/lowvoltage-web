import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low Voltage Ltd — Practical tools for trade professionals",
  description: "Low Voltage Ltd builds practical reference and productivity apps for tradespeople in New Zealand and Australia.",
};

type AppStatus = "available" | "coming-soon";

interface App {
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  platforms: string[];
}

const APPS: App[] = [
  {
    name: "Wiregram",
    tagline: "Wiring diagrams, simplified.",
    description: "Create clear, professional electrical wiring diagrams on your phone or tablet — built for electricians in the field.",
    status: "available",
    platforms: ["iOS", "Android"],
  },
  {
    name: "Buildable",
    tagline: "The builder's reference, in your pocket.",
    description: "All-in-one reference and calculator for builders. Span tables, material estimates, conversions, and more — offline ready.",
    status: "available",
    platforms: ["iOS"],
  },
  {
    name: "Electrify",
    tagline: "Electrical reference for every job.",
    description: "Cable sizing, circuit calculations, and NZ/AU wiring standards reference — designed for electricians.",
    status: "coming-soon",
    platforms: ["iOS", "Android"],
  },
  {
    name: "Plumbable",
    tagline: "Plumbing reference made easy.",
    description: "Pipe sizing, fixture counts, and trade reference tools — everything a plumber needs on site.",
    status: "coming-soon",
    platforms: ["iOS", "Android"],
  },
  {
    name: "LidarPlan",
    tagline: "Site measurement, reimagined.",
    description: "Use your device's LiDAR sensor to capture accurate site measurements and generate floor plans on the go.",
    status: "coming-soon",
    platforms: ["iOS"],
  },
];

function StatusBadge({ status }: { status: AppStatus }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
        Available
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
      Coming Soon
    </span>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Practical tools for<br />trade professionals.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl">
          Low Voltage Ltd builds focused, no-nonsense apps for tradespeople working across New Zealand and Australia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPS.map((app) => (
          <div
            key={app.name}
            className={`rounded-2xl border p-6 flex flex-col gap-4 ${
              app.status === "available"
                ? "border-gray-200 bg-white shadow-sm"
                : "border-gray-100 bg-gray-50"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{app.name}</h2>
              <StatusBadge status={app.status} />
            </div>
            <p className="text-sm font-medium text-gray-500 -mt-2">{app.tagline}</p>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{app.description}</p>
            <div className="flex gap-1.5">
              {app.platforms.map((platform) => (
                <span key={platform} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
