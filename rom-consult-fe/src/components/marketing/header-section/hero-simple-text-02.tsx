"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { RatingStars } from "@/components/foundations/rating-stars";

export const HeroSimpleText02 = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-24">
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-30 md:block"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-30 md:hidden"
            />
            <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-brand bg-brand-primary_alt px-3 py-1 text-sm font-semibold text-brand-secondary">
                        Digital & Cloud Experts
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                        Digital Marketing & Cloud Consulting
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary md:text-xl">
                        We help growing brands scale faster with SEO, paid media, analytics, and cloud architecture delivered by senior consultants.
                    </p>
                    <div className="mt-8 flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row">
                        <Button color="secondary" size="xl">
                            Learn More
                        </Button>
                        <Button size="xl" iconTrailing={ArrowRight}>
                            Get Started
                        </Button>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-secondary bg-primary px-4 py-2">
                        <RatingStars rating={5} className="gap-0.5" />
                        <span className="text-sm font-medium text-secondary">500+ satisfied clients</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
