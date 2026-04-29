"use client";

import { BankNote02, BarChartSquare02, Building02, File05, Globe02, Zap } from "@untitledui/icons";
import { FeatureTextFeaturedIconTopCentered } from "./base-components/feature-text";

const features = [
    {
        title: "Strategic planning",
        subtitle: "Long-term growth strategies, market analysis, and competitive positioning tailored to your stage and geography.",
        icon: BarChartSquare02,
    },
    {
        title: "Financial advisory",
        subtitle: "Cash management, financial planning, and budget optimization so capital and operations stay aligned.",
        icon: BankNote02,
    },
    {
        title: "Operational optimization",
        subtitle: "Clearer processes and stronger execution across day-to-day business activities and delivery.",
        icon: Zap,
    },
    {
        title: "Business & management counsel",
        subtitle: "Hands-on support on governance, planning decisions, and management priorities for leadership teams.",
        icon: Building02,
    },
    {
        title: "Intellectual property",
        subtitle: "Guidance on trademarks, processes, patents, and related IP tied to your products and markets.",
        icon: File05,
    },
    {
        title: "European market entry",
        subtitle: "Structured support when you expand into European markets—regulatory context, partnerships, and go-to-market sequencing.",
        icon: Globe02,
    },
];

export const FeaturesSimpleIcons02 = () => {
    return (
        <section id="services" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Services</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">What RomConsult delivers</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Core offerings mirror the firm’s published focus: strategy, finance, operations, and the legal-economic building blocks SMEs need to
                        scale.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
