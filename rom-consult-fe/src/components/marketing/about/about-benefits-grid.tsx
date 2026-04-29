"use client";

import { CheckCircle, Clock, LayersThree01, MessageChatCircle, Stars02, Zap } from "@untitledui/icons";
import { FeatureTextFeaturedIconTopCentered } from "@/components/marketing/features/base-components/feature-text";

const benefits = [
    {
        title: "Live video sessions",
        subtitle: "Real-time consulting with experienced specialists focused on solving specific business bottlenecks.",
        icon: MessageChatCircle,
    },
    {
        title: "Affordable pricing",
        subtitle: "From $5 per hour with transparent rates designed for startups, teams, and independent professionals.",
        icon: Clock,
    },
    {
        title: "Certified experts",
        subtitle: "Work with practitioners across marketing, cloud, and automation who operate with proven frameworks.",
        icon: CheckCircle,
    },
    {
        title: "Flexible scheduling",
        subtitle: "Book sessions anytime with consultants available across time zones and business hours.",
        icon: Stars02,
    },
    {
        title: "Actionable strategies",
        subtitle: "Every call ends with practical steps you can apply immediately to drive measurable progress.",
        icon: Zap,
    },
    {
        title: "Quality guarantee",
        subtitle: "Structured onboarding and session standards help ensure consistent quality for every engagement.",
        icon: LayersThree01,
    },
];

export const AboutBenefitsGrid = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary md:text-md">Benefits</p>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Why choose Optimark Media?</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">The reason our consulting platform stands out.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    {benefits.map((item) => (
                        <li key={item.title} className="rounded-2xl bg-primary px-6 py-8 ring-1 ring-secondary">
                            <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} color="brand" theme="dark" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
