"use client";

import type { ComponentType } from "react";
import { Announcement01, BarChartSquare02, Cloud01, LayersThree01, Mail01, Stars02 } from "@untitledui/icons";

interface SpecializationItem {
    label: string;
    description?: string;
}

interface Specialization {
    title: string;
    icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
    accentClassName: string;
    barClassName: string;
    items: SpecializationItem[];
}

export const FeaturesIconCards01 = () => {
    const specializations: Specialization[] = [
        {
            title: "Paid Advertising",
            icon: Announcement01,
            accentClassName: "border-[#22C55E]",
            barClassName: "bg-[#22C55E]",
            items: [
                { label: "Google Ads", description: "PPC Campaigns" },
                { label: "Meta Ads", description: "Facebook & Instagram" },
                { label: "TikTok Ads", description: "Video Marketing" },
                { label: "YouTube Ads", description: "Video Campaigns" },
                { label: "Bing Ads", description: "Microsoft Advertising" },
            ],
        },
        {
            title: "Analytics & Tracking",
            icon: BarChartSquare02,
            accentClassName: "border-[#3B82F6]",
            barClassName: "bg-[#3B82F6]",
            items: [
                { label: "Google Analytics 4", description: "GA4 Setup" },
                { label: "Google Tag Manager", description: "GTM" },
                { label: "Meta Pixel", description: "Tracking Setup" },
                { label: "Conversion Tracking", description: "ROI Analysis" },
                { label: "UTM Parameters", description: "Campaign Tracking" },
            ],
        },
        {
            title: "Cloud & Hosting",
            icon: Cloud01,
            accentClassName: "border-[#F97316]",
            barClassName: "bg-[#F97316]",
            items: [
                { label: "AWS", description: "Amazon Web Services" },
                { label: "Azure", description: "Microsoft Cloud" },
                { label: "Google Cloud", description: "GCP" },
                { label: "DigitalOcean", description: "VPS Setup" },
                { label: "cPanel/Plesk", description: "Server Management" },
            ],
        },
        {
            title: "Email Marketing",
            icon: Mail01,
            accentClassName: "border-[#8B5CF6]",
            barClassName: "bg-[#8B5CF6]",
            items: [
                { label: "Amazon SES", description: "Email Service" },
                { label: "SendGrid", description: "Email Delivery" },
                { label: "Mailchimp", description: "Automation" },
                { label: "SMTP Setup", description: "Configuration" },
                { label: "Deliverability", description: "Optimization" },
            ],
        },
        {
            title: "AI & Automation",
            icon: Stars02,
            accentClassName: "border-[#6366F1]",
            barClassName: "bg-[#6366F1]",
            items: [
                { label: "ChatGPT", description: "AI Integration" },
                { label: "AI Content", description: "Generation" },
                { label: "GitHub Copilot", description: "AI Coding" },
                { label: "Workflow Automation" },
                { label: "AI Strategy", description: "Implementation" },
            ],
        },
        {
            title: "Server Management",
            icon: LayersThree01,
            accentClassName: "border-[#EF4444]",
            barClassName: "bg-[#EF4444]",
            items: [
                { label: "Linux Server", description: "Configuration" },
                { label: "SSL/Security", description: "Implementation" },
                { label: "Database", description: "Management" },
                { label: "Performance", description: "Optimization" },
                { label: "CDN Setup", description: "CloudFlare" },
            ],
        },
    ];

    return (
        <section id="services" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold tracking-wide text-brand-secondary md:text-md">EXPERTISE</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Our Specializations</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Expert consulting across digital advertising, cloud infrastructure, and automation.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {specializations.map((item) => (
                            <li key={item.title} className={`overflow-hidden rounded-2xl border bg-primary ${item.accentClassName}`}>
                                <div className={`flex items-center gap-2 px-4 py-3 ${item.barClassName}`}>
                                    <item.icon className="size-4 text-white" aria-hidden />
                                    <h3 className="text-md font-semibold text-white">{item.title}</h3>
                                </div>
                                <ul className="space-y-4 px-6 py-6">
                                    {item.items.map((entry) => (
                                        <li key={entry.label} className="text-md">
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
