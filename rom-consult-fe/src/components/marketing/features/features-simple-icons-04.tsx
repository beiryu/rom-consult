"use client";

import { Lightning01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FeatureTextLeft } from "./base-components/feature-text";

export const FeaturesSimpleIcons04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
                    <div className="max-w-3xl lg:col-span-1">
                        <FeaturedIcon icon={Lightning01} color="brand" size="xl" theme="light" className="hidden md:flex" />
                        <FeaturedIcon icon={Lightning01} color="brand" size="lg" theme="light" className="md:hidden" />

                        <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">Popular Services</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Explore the services clients request most often for rapid growth and stronger cloud performance.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2">
                            {[
                                {
                                    title: "SEO Optimization",
                                    subtitle: "Technical and on-page SEO improvements that increase visibility and qualified search traffic.",
                                },
                                {
                                    title: "Google Ads",
                                    subtitle: "Performance-focused paid search campaigns designed to reduce CPL and improve ROAS.",
                                },
                                {
                                    title: "Social Media Management",
                                    subtitle: "Channel planning, creative deployment, and optimization across key social platforms.",
                                },
                                {
                                    title: "Content Marketing",
                                    subtitle: "Content strategies and production workflows that support ranking and lead generation.",
                                },
                                {
                                    title: "Cloud Migration",
                                    subtitle: "Safe transition plans to modern cloud environments with minimal downtime and risk.",
                                },
                                {
                                    title: "AWS Setup",
                                    subtitle: "From account structure to security baselines, we establish scalable AWS foundations.",
                                },
                                {
                                    title: "Analytics Setup",
                                    subtitle: "Reliable event tracking, attribution models, and dashboards for confident decisions.",
                                },
                                {
                                    title: "Email Marketing",
                                    subtitle: "Lifecycle automations and campaign strategy to improve retention and recurring revenue.",
                                },
                            ].map((item) => (
                                <li key={item.title}>
                                    <FeatureTextLeft title={item.title} subtitle={item.subtitle} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
