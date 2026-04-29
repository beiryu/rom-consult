"use client";

import { useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FAQAccordionFaqPage } from "@/components/marketing/faq/faq-accordion-faq-page";

const HeaderSpaceBetweenSearch = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-secondary_on-brand md:text-md">RomConsult Support</div>
                <div className="grid grid-cols-[minmax(auto,768px)] gap-x-16 lg:grid-cols-[1fr_480px]">
                    <h1 className="text-display-md font-semibold text-primary_on-brand md:text-display-lg">Frequently asked questions</h1>

                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl lg:mt-3 lg:h-0">
                        Everything you need to know about working with RomConsult, from booking to delivery.
                    </p>

                    <div className="mt-8 w-full sm:mt-8 sm:w-80">
                        <Input size="lg" type="search" aria-label="Search FAQ" placeholder="Search FAQs" icon={SearchLg} wrapperClassName="sm:py-0.5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CardVerticalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-brand-section px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand xl:text-display-md">
                        <span className="hidden md:inline">Need tailored consulting support?</span>
                        <span className="md:hidden">Need consulting support?</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">
                        Tell us your business goals and we will match you with the right consultant.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl" href="/browse-services">
                            Browse services
                        </Button>
                        <Button size="xl" href="/contact">
                            Contact RomConsult
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQPage08 = () => {
    return (
        <div className="bg-primary">
            <HeaderSpaceBetweenSearch />

            <FAQAccordionFaqPage />

            <CardVerticalBrand />
        </div>
    );
};

export default FAQPage08;
