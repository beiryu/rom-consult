"use client";

import { ArrowRight, CheckCircle, MarkerPin01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";

const highlights = ["Remote-first projects", "Flexible schedule", "Weekly payouts"];

export const HeroBecomeConsultant = () => {
    return (
        <section id="hero" className="bg-utility-brand-50_alt py-16 md:py-24" aria-labelledby="become-consultant-heading">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-start sm:items-center sm:text-center">
                    <a href="#application-form" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeGroup className="hidden md:flex" size="lg" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                            Join the RomConsult expert network
                        </BadgeGroup>
                        <BadgeGroup className="md:hidden" size="md" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                            Become a consultant
                        </BadgeGroup>
                    </a>

                    <h1 id="become-consultant-heading" className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">
                        Share your expertise,
                        <br />
                        help businesses grow
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg text-brand-secondary md:mt-6 md:text-xl">
                        We connect experienced specialists in marketing, cloud, analytics, and operations with teams that need practical guidance and measurable
                        outcomes.
                    </p>

                    <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:mt-10">
                        {highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-lg border border-brand_alt bg-primary px-3 py-2.5">
                                <CheckCircle className="size-4 text-fg-brand-primary" aria-hidden />
                                <span className="text-sm font-medium text-secondary">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
