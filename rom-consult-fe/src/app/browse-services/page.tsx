"use client";

import { ServicesSection } from "@/components/marketing/browse-services/services-section";
import { FeaturesSimpleIcons02 } from "@/components/marketing/features/features-simple-icons-02";
import { HeaderCenteredSearchBrand } from "@/components/marketing/header-section/header-centered-search-brand";

export default function BrowseServicesPage() {
    return (
        <div className="bg-primary">
            <main>
                <HeaderCenteredSearchBrand />
                <ServicesSection />
                <FeaturesSimpleIcons02 />
            </main>
        </div>
    );
}
