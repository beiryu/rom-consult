"use client";

import { Award01, Award02, Award03 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";

const tiers = [
    {
        title: "Bronze",
        rate: "$5",
        icon: Award01,
        details: ["1-2 years experience", "Entry-level consulting", "30-60 min sessions", "Email support"],
    },
    {
        title: "Silver",
        rate: "$10",
        icon: Award02,
        details: ["3-5 years experience", "Intermediate expertise", "Full 60-min sessions", "Action plan included"],
    },
    {
        title: "Gold",
        rate: "$20",
        icon: Award03,
        details: ["6+ years experience", "Expert consulting", "Premium sessions", "Priority support"],
        highlighted: true,
    },
];

export const ConsultantTierPricingCard = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary md:text-md">PRICING</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Consultant Tier Pricing</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Choose the right consultant tier for your current experience level and grow as you gain reviews.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <article key={tier.title} className={cx("overflow-hidden rounded-2xl bg-primary ring-1", tier.highlighted ? "ring-brand" : "ring-secondary")}>
                            <div className={cx("flex flex-col items-center px-6 py-7 text-center", tier.highlighted ? "bg-brand-secondary" : "bg-secondary")}>
                                <FeaturedIcon
                                    icon={tier.icon}
                                    color={tier.highlighted ? "brand" : "gray"}
                                    theme={tier.highlighted ? "light" : "modern"}
                                    size="md"
                                        className={tier.highlighted ? "ring-1 ring-brand_alt rounded-lg!" : undefined}
                                />
                                <h3 className={cx("mt-4 text-xl font-semibold", tier.highlighted ? "text-brand-primary" : "text-secondary")}>{tier.title}</h3>
                                <p className="mt-2 text-display-sm font-semibold text-primary md:text-display-md">
                                    {tier.rate}
                                    <span className="ml-1 text-md font-medium text-tertiary">/hour</span>
                                </p>
                            </div>

                            <ul className="flex flex-col gap-4 px-6 py-6 md:px-7">
                                {tier.details.map((detail) => (
                                    <CheckItemText key={detail} text={detail} color="primary" textClassName="text-secondary" />
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};
