"use client";

import { CTACardHorizontal } from "@/components/marketing/cta/cta-card-horizontal";
import { FAQAccordion01 } from "@/components/marketing/faq/faq-accordion-01";
import { FeaturesIconCards01 } from "@/components/marketing/features/features-icon-cards-01";
import { ProcessHowItWorksCards } from "@/components/marketing/features/process-how-it-works-cards";
import { PopularServicesSection } from "@/components/marketing/browse-services/popular-services-section";
import { HeroAbstractAngles01 } from "@/components/marketing/header-section/hero-abstract-angles-01";
import { PricingAbstractAngles } from "@/components/marketing/pricing-sections/pricing-abstract-angles";
import { TestimonialSocialCards02 } from "@/components/marketing/testimonials/testimonial-social-cards-02";

export const HomeScreen = () => {
    return (
        <div className="bg-primary">
            <main>
                <HeroAbstractAngles01 />
                <PricingAbstractAngles />
                <FeaturesIconCards01 />
                <PopularServicesSection />
                <ProcessHowItWorksCards />
                <TestimonialSocialCards02 />
                <FAQAccordion01 />
                <CTACardHorizontal />
            </main>
        </div>
    );
};
