"use client";

import { ArrowRight, BankNote02, BarChartSquare02, Building02, File05, Globe02, Zap } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeatureTextFeaturedIconTopLeft } from "@/components/marketing/features/base-components/feature-text";

const features = [
    {
        title: "Strategic planning",
        subtitle: "Long-term growth strategies, market analysis, and competitive positioning tailored to your stage and geography.",
        icon: BarChartSquare02,
        cta: "Contact RomConsult",
        href: "#contact",
    },
    {
        title: "Financial advisory",
        subtitle: "Cash management, financial planning, and budget optimization so capital and operations stay aligned.",
        icon: BankNote02,
        cta: "Contact RomConsult",
        href: "#contact",
    },
    {
        title: "Operational optimization",
        subtitle: "Clearer processes and stronger execution across day-to-day business activities and delivery.",
        icon: Zap,
        cta: "Contact RomConsult",
        href: "#contact",
    },
    {
        title: "Business & management counsel",
        subtitle: "Hands-on support on governance, planning decisions, and management priorities for leadership teams.",
        icon: Building02,
        cta: "Contact RomConsult",
        href: "#contact",
    },
    {
        title: "Intellectual property",
        subtitle: "Guidance on trademarks, processes, patents, and related IP tied to your products and markets.",
        icon: File05,
        cta: "Contact RomConsult",
        href: "#contact",
    },
    {
        title: "European market entry",
        subtitle: "Structured support when you expand into European markets—regulatory context, partnerships, and go-to-market sequencing.",
        icon: Globe02,
        cta: "Contact RomConsult",
        href: "#contact",
    },
];

export const FeaturesSimpleIcons03Brand = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Engagement model</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Built around your priorities</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        RomConsult combines strategic, financial, and operational expertise with participation in structuring and transactions where
                        appropriate, tailored to startup and SME priorities.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopLeft
                                    {...item}
                                    footer={
                                        <Button color="link-color" size="lg" href={item.href} iconTrailing={ArrowRight}>
                                            {item.cta}
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
