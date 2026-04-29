import { PricingTierCardCallout } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Bronze tier",
        subtitle: "$5/hour",
        description: "Entry-level guidance for focused Q&A and basic strategy sessions.",
        features: ["30-60 minute sessions", "Live video and screen sharing", "Actionable notes and next steps"],
        hasCallout: true,
        ctaLabel: "Get started",
        ctaHref: "/browse-services",
    },
    {
        title: "Silver tier",
        subtitle: "$10/hour",
        description: "Intermediate consulting with custom documentation and deeper reviews.",
        features: ["60-minute deep-dive calls", "Custom implementation guidance", "Platform setup support"],
        ctaLabel: "Get started",
        ctaHref: "/browse-services",
    },
    {
        title: "Gold tier",
        subtitle: "$20/hour",
        description: "Expert consulting for advanced strategy, priority support, and complex topics.",
        features: ["Advanced strategies and audits", "Priority support lane", "Extended live implementation sessions"],
        ctaLabel: "Get started",
        ctaHref: "/browse-services",
    },
    {
        title: "Coverage",
        subtitle: "100+ tools",
        description: "Consulting across marketing, cloud, analytics, automation, and server ops.",
        features: ["Google Ads, Meta, TikTok, YouTube", "AWS, Azure, GCP, DigitalOcean", "GA4, GTM, Email, ChatGPT workflows"],
        ctaLabel: "Explore topics",
        ctaHref: "#services",
    },
];

export const PricingSimpleCallOut = () => {
    return (
        <section id="about" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Simple consultant tiers from $5/hour</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Following the Rom Consult model, each session includes live video call, screen sharing, and actionable post-session documentation.
                    </p>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
                    {plans.map((plan) => (
                        <PricingTierCardCallout key={plan.title} {...plan} checkItemTextColor="success" />
                    ))}
                </div>
            </div>
        </section>
    );
};
