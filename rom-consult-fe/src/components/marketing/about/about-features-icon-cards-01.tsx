"use client";

import type { FC } from "react";
import { Announcement01, BarChartSquare02, Cloud01, LayersThree01, Mail01, Stars02 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

interface SpecializationItem {
    label: string;
    description?: string;
}

interface Specialization {
    title: string;
    icon: FC<{ className?: string }>;
    summary: string;
    items: SpecializationItem[];
    isMoreCard?: boolean;
}

export const AboutFeaturesIconCards01 = () => {
    const specializations: Specialization[] = [
        {
            title: "Advertising Platforms",
            icon: Announcement01,
            summary: "Scale paid campaigns with practical guidance on setup and optimization.",
            items: [
                { label: "Google Ads", description: "Search & display" },
                { label: "Meta Ads", description: "Facebook & Instagram" },
                { label: "YouTube Ads", description: "Video campaigns" },
                { label: "TikTok Ads", description: "Short-form growth" },
            ],
        },
        {
            title: "Analytics & Tracking",
            icon: BarChartSquare02,
            summary: "Build reliable measurement so teams can act on data with confidence.",
            items: [
                { label: "Google Analytics 4", description: "Implementation" },
                { label: "Google Tag Manager", description: "Container setup" },
                { label: "Meta Pixel", description: "Event tracking" },
                { label: "Attribution", description: "Campaign analysis" },
            ],
        },
        {
            title: "Cloud & Servers",
            icon: Cloud01,
            summary: "Get help deploying and scaling secure infrastructure across providers.",
            items: [
                { label: "AWS", description: "Account architecture" },
                { label: "Google Cloud", description: "Workload setup" },
                { label: "Azure", description: "Operations support" },
                { label: "VPS tools", description: "Migration and hardening" },
            ],
        },
        {
            title: "Email Marketing",
            icon: Mail01,
            summary: "Improve deliverability and lifecycle automation across your stack.",
            items: [
                { label: "Amazon SES", description: "Domain and SMTP setup" },
                { label: "Brevo", description: "Campaign execution" },
                { label: "Mailchimp", description: "Automations" },
                { label: "SendGrid", description: "Delivery management" },
            ],
        },
        {
            title: "AI & Automation",
            icon: Stars02,
            summary: "Use practical AI workflows to improve speed and reduce manual ops.",
            items: [
                { label: "ChatGPT workflows", description: "Prompt systems" },
                { label: "AI content operations", description: "Publishing assist" },
                { label: "Zapier", description: "Automation pipelines" },
                { label: "Make", description: "Process orchestration" },
            ],
        },
        {
            title: "+90 More Topics",
            icon: LayersThree01,
            summary: "Explore additional consulting areas across growth, operations, and technical execution.",
            items: [
                { label: "E-commerce operations", description: "Store optimization" },
                { label: "SEO", description: "Technical and content" },
                { label: "Payments", description: "Checkout and fraud tools" },
                { label: "Social media", description: "Execution systems" },
            ],
            isMoreCard: true,
        },
    ];

    return (
        <section id="services" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold tracking-wide text-brand-secondary md:text-md">OUR EXPERTISE</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">What we teach</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Expert consulting across six core business and technology categories.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {specializations.map((item) => (
                            <li key={item.title} className={`overflow-hidden rounded-2xl ring-1 ring-inset ring-secondary ${item.isMoreCard ? "bg-secondary" : "bg-primary"}`}>
                                <div className="flex items-center gap-3 border-b border-secondary px-5 py-4">
                                    <FeaturedIcon
                                        icon={item.icon}
                                        color="brand"
                                        size="md"
                                        theme="dark"
                                    />
                                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                </div>
                                <p className="px-5 pt-4 text-sm text-tertiary">{item.summary}</p>
                                <ul className="mt-4 space-y-3 px-5 pb-5">
                                    {item.items.map((entry) => (
                                        <li key={entry.label} className="border-t border-secondary pt-3 text-md first:border-0 first:pt-0">
                                            <span className="font-semibold text-primary">{entry.label}</span>
                                            {entry.description ? (
                                                <>
                                                    <span className="text-primary"> - </span>
                                                    <span className="text-tertiary">{entry.description}</span>
                                                </>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
