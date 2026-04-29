"use client";

import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { RatingStars } from "@/components/foundations/rating-stars";

export const HeaderCenteredSearchBrand = () => {
    return (
        <section>
            <div className="flex flex-col items-center bg-utility-brand-50_alt py-16 md:py-24">
                <div className="mx-auto flex w-full max-w-container flex-col px-4 md:px-8">
                    <div className="flex flex-col items-start sm:items-center sm:text-center">
                        <a href="#services" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="Book now" iconTrailing={ArrowRight} theme="light" color="brand">
                                Expert advisory sessions
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="Book now" iconTrailing={ArrowRight} theme="light" color="brand">
                                Expert advisory
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">
                            Strategic 1-on-1 Consulting
                            <br />
                            for Growth Teams
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-brand-secondary md:mt-6 md:text-xl">
                            Engage senior specialists in e-commerce, CRM, SEO, analytics, and cloud to solve high-impact challenges with clear, actionable outcomes.
                        </p>

                        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
                            <div className="flex items-center">
                                {[
                                    "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
                                    "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
                                    "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
                                    "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
                                    "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80",
                                ].map((src, index) => (
                                    <img
                                        key={src}
                                        src={src}
                                        alt=""
                                        aria-hidden="true"
                                        className="-ml-2 size-10 rounded-full border-2 border-primary object-cover first:ml-0"
                                        style={{ zIndex: 10 - index }}
                                    />
                                ))}
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <RatingStars rating={5} className="gap-0.5" starClassName="size-5 text-fg-warning-secondary" />
                                    <span className="text-lg font-medium text-primary">5.0</span>
                                </div>
                                <p className="text-md font-medium text-secondary">from 200+ reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
