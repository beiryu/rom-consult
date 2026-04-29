"use client";

import { ProgressFeaturedIconCenteredSm } from "@/components/application/progress-steps/progress-featured-icon-centered-sm";
import { Button } from "@/components/base/buttons/button";
import { FeaturesSimpleIcons02 } from "@/components/marketing/features/features-simple-icons-02";

const installCommands = [
    "npx untitledui@latest add hero-abstract-angles-01",
    "npx untitledui@latest add pricing-simple-call-out",
    "npx untitledui@latest add testimonial-social-cards-03-brand",
    "npx untitledui@latest add cta-split-image-quote-02",
    "npx untitledui@latest add footer-large-04",
];

export default function ComponentsShowcasePage() {
    return (
        <div className="bg-primary">
            <main>
                <section className="bg-primary py-16 md:py-24">
                    <div className="mx-auto w-full max-w-container px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Library</span>
                            <h1 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Components Showcase</h1>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Install-ready sections and components used across the Rum Consult pages.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16">
                            {installCommands.map((command) => (
                                <div key={command} className="rounded-xl border border-secondary bg-secondary p-4 md:p-5">
                                    <code className="text-sm text-primary md:text-md">{command}</code>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Button href="/" color="secondary" size="lg">
                                Back to Home
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="bg-primary py-16 md:py-24">
                    <div className="mx-auto w-full max-w-container px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Preview</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Installed component previews</h2>
                        </div>
                        <div className="mt-12 md:mt-16">
                            <ProgressFeaturedIconCenteredSm />
                        </div>
                    </div>
                </section>

                <FeaturesSimpleIcons02 />
            </main>
        </div>
    );
}
