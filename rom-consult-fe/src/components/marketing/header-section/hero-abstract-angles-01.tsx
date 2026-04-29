"use client";

import { ArrowRight, MarkerPin01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { SocialProofFullWidth } from "@/components/marketing/social-proof/social-proof-full-width";
import { BackgroundStripes } from "./base-components/background-stripes";

export const HeroAbstractAngles01 = () => {
    return (
        <div className="bg-primary">
            <section id="hero" aria-labelledby="hero-heading">
                <div className="flex flex-col items-center bg-utility-brand-50_alt pt-16 md:pt-24">
                    <div className="mx-auto flex w-full max-w-container flex-col px-4 md:px-8">
                        <div className="flex flex-col items-start sm:items-center sm:text-center">
                            <a href="#about" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                <BadgeGroup className="hidden md:flex" size="lg" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                                    Digital marketing, cloud, and business consulting
                                </BadgeGroup>
                                <BadgeGroup className="md:hidden" size="md" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                                    1-on-1 expert guidance for modern teams
                                </BadgeGroup>
                            </a>

                            <h1 id="hero-heading" className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">
                                Digital marketing and cloud consulting
                                <br />
                                for startups and SMEs
                            </h1>
                            <p className="mt-4 max-w-3xl text-lg text-brand-secondary md:mt-6 md:text-xl">
                                From strategic planning to hands-on implementation across Google Ads, Meta Ads, AWS, GA4, email systems, and AI workflows.
                            </p>
                            <div className="relative z-1 mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                                <Button color="secondary" size="xl" href="/browse-services">
                                    Book a session
                                </Button>
                                <Button size="xl" href="/contact" iconTrailing={ArrowRight}>
                                    Contact us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-24 md:h-10 lg:h-16">
                    <div className="absolute inset-x-0 -top-10 md:-top-24">
                        <BackgroundStripes />
                    </div>
                </div>

                <div className="relative pb-16 md:pb-24">
                    <SocialProofFullWidth />
                </div>
            </section>
        </div>
    );
};
