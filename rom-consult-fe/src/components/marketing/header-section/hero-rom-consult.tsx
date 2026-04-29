"use client";

import { ArrowRight, MarkerPin01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";

export const HeroRomConsult = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <img
                alt=""
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt=""
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <section id="hero" className="relative py-16 md:py-24" aria-labelledby="hero-heading">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
                        <a href="#about" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                                Digital marketing, cloud, and business consulting
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="Paris" iconTrailing={MarkerPin01} theme="light" color="brand">
                                1-on-1 expert guidance for modern teams
                            </BadgeGroup>
                        </a>

                        <h1 id="hero-heading" className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Digital marketing and cloud consulting for startups and SMEs
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            From strategic planning to hands-on implementation across Google Ads, Meta Ads, AWS, GA4, email systems, and AI workflows.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button color="secondary" size="xl" href="#contact">
                                Book a session
                            </Button>
                            <Button size="xl" href="#contact" iconTrailing={ArrowRight}>
                                Contact us
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt=""
                        aria-hidden="true"
                        src="/assets/hero-geo-shapes-desktop-04-blue.svg"
                        className="hidden w-full object-cover sm:block"
                    />
                    <img
                        alt=""
                        aria-hidden="true"
                        src="/assets/hero-geo-shapes-desktop-04-blue.svg"
                        className="w-full object-cover sm:hidden"
                    />
                </div>
            </section>
        </div>
    );
};
