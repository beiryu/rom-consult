"use client";

import { ConsultantProviderDisclosure } from "@/components/marketing/become-consultant/consultant-provider-disclosure";
import { ConsultantTierPricingCard } from "@/components/marketing/become-consultant/consultant-tier-pricing-card";
import { ConsultantWhyJoinGrid } from "@/components/marketing/become-consultant/consultant-why-join-grid";
import { ExpertConsultantApplicationForm } from "@/components/marketing/forms/expert-consultant-application-form";
import { HeroBecomeConsultant } from "@/components/marketing/header-section/hero-become-consultant";

export default function BecomeAConsultantPage() {
    return (
        <div className="bg-primary">
            <main>
                <HeroBecomeConsultant />
                <section id="application-form" className="bg-primary py-16 md:py-24" aria-labelledby="application-form-heading">
                    <div className="mx-auto flex w-full max-w-container flex-col items-center gap-10 px-4 md:gap-12 md:px-8">
                        <div className="mx-auto flex flex-col items-center text-center">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">APPLICATION</span>
                            <h2 id="application-form-heading" className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                                Apply to join as a consultant
                            </h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Complete the form below and our team will review your profile within 2-3 business days.
                            </p>
                        </div>
                        <ExpertConsultantApplicationForm />
                    </div>
                </section>
                <ConsultantTierPricingCard />
                <ConsultantWhyJoinGrid />
                <ConsultantProviderDisclosure />
            </main>
        </div>
    );
}
