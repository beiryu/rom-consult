"use client";

import type { FC } from "react";
import { CalendarCheck01, File02, User01, VideoRecorder } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

interface ProcessStep {
    title: string;
    description: string;
    icon: FC<{ className?: string; "aria-hidden"?: boolean }>;
}

const steps: ProcessStep[] = [
    {
        title: "Book a Session",
        description: "Select a topic and time that fits your schedule.",
        icon: CalendarCheck01,
    },
    {
        title: "Get Matched",
        description: "We match you with the right consultant.",
        icon: User01,
    },
    {
        title: "Live Session",
        description: "Screen-share, setup, and Q&A in real time.",
        icon: VideoRecorder,
    },
    {
        title: "Get Documentation",
        description: "Receive a summary and next steps.",
        icon: File02,
    },
];

export const ProcessHowItWorksCards = () => {
    return (
        <section id="process" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold tracking-wide text-brand-secondary uppercase md:text-md">Process</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">How It Works</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Simple steps from booking to follow-up.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {steps.map((step) => (
                        <li key={step.title} className="rounded-xl border border-secondary bg-primary p-8 text-center">
                            <FeaturedIcon icon={step.icon} size="md" color="brand" theme="dark" className="mx-auto" />
                            <h3 className="mt-5 text-lg font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-md text-tertiary">{step.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
