"use client";

import { BankNote02, Clock, TrendUp02, Users01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const reasons = [
    {
        title: "Earn Money",
        subtitle: "Choose your rate: $5, $10, or $20 per hour",
        icon: BankNote02,
    },
    {
        title: "Flexible Schedule",
        subtitle: "Work on your time, set your availability",
        icon: Clock,
    },
    {
        title: "Help Others",
        subtitle: "Share knowledge, make a difference",
        icon: Users01,
    },
    {
        title: "Grow Your Brand",
        subtitle: "Build reputation, expand network",
        icon: TrendUp02,
    },
];

export const ConsultantWhyJoinGrid = () => {
    return (
        <section className="bg-primary pb-6 md:pb-8">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary md:text-md">BENEFITS</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Why Join Us?</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Join a trusted consultant network to grow your income, help clients, and build long-term professional credibility.
                    </p>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {reasons.map((reason) => (
                        <li key={reason.title} className="rounded-xl bg-primary p-5 ring-1 ring-secondary">
                            <div className="flex gap-4">
                                <FeaturedIcon icon={reason.icon} size="lg" color="brand" theme="dark" className="hidden md:inline-flex" />
                                <FeaturedIcon icon={reason.icon} size="md" color="brand" theme="dark" className="inline-flex md:hidden" />

                                <div className="flex flex-col">
                                    <h3 className="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{reason.title}</h3>
                                    <p className="mt-1 text-md text-tertiary">{reason.subtitle}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
