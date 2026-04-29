"use client";

import { BarChartSquare02, Cloud01, TrendUp02 } from "@untitledui/icons";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Starter",
        subtitle: "$5/hr",
        description: "Best for early stage teams.",
        features: [
            "SEO fundamentals and keyword setup",
            "Basic Google Ads campaign launch",
            "Monthly performance reporting",
            "Email support during business hours",
        ],
        icon: TrendUp02,
    },
    {
        title: "Growth",
        subtitle: "$10/hr",
        description: "For scaling brands and teams.",
        features: [
            "Multi-channel campaign strategy",
            "A/B testing and optimization",
            "Analytics dashboard setup",
            "Priority chat and email support",
        ],
        icon: BarChartSquare02,
    },
    {
        title: "Enterprise",
        subtitle: "$20/hr",
        description: "For mature teams and complex systems.",
        features: [
            "Cloud migration and architecture support",
            "Advanced attribution and data modeling",
            "Dedicated consultant and roadmap planning",
            "Ongoing optimization and support",
        ],
        icon: Cloud01,
    },
];

export const PricingSectionSimpleCards01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Choose Your Consultant Tier</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Select the engagement model that matches your current growth stage and business goals.
                    </p>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardIcon key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
