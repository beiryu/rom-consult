"use client";

import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PricingAbstractAngles = () => {
    const plans = [
        {
            title: "Bronze",
            subtitle: "$5",
            description: "per hour",
            features: [
                "Entry-level guidance",
                "Basic strategy sessions",
                "Q&A support",
                "30-60 min sessions",
            ],
            icon: Zap,
            ctaHref: "/browse-services",
        },
        {
            title: "Silver",
            subtitle: "$10",
            description: "per hour",
            badge: "Popular",
            features: [
                "Intermediate expertise",
                "Custom documentation",
                "Screen sharing",
                "60 min deep-dive",
            ],
            icon: LayersTwo01,
            ctaHref: "/browse-services",
        },
        {
            title: "Gold",
            subtitle: "$20",
            description: "per hour",
            features: [
                "Expert consultation",
                "Advanced strategies",
                "Priority support",
                "Extended sessions",
            ],
            icon: LayersThree01,
            ctaHref: "/browse-services",
        },
    ];

    return (
        <section className="bg-primary">
            <div className="pt-16 md:pt-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold tracking-wide text-brand-secondary md:text-md">SIMPLE PRICING</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Choose your consultant tier</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            All sessions include live video call, screen sharing, and actionable documentation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        {plans.map((plan) => (
                            <PricingTierCardIcon key={plan.title} {...plan} iconTheme="modern" iconColor="gray" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
