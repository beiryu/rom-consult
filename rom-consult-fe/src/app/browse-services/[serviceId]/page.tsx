"use client";

import { ServiceDetailBookingPage } from "@/components/marketing/browse-services/service-detail-booking-page";
import { mapProductToServiceItem } from "@/components/marketing/browse-services/product-mappers";
import { useProductBySlug } from "@/hooks/use-products";

interface ServiceBookingPageProps {
    params: { serviceId: string };
}

export default function ServiceBookingPage({ params }: ServiceBookingPageProps) {
    const productQuery = useProductBySlug(params.serviceId);

    if (productQuery.isPending) {
        return (
            <div className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 text-md text-tertiary md:px-8">Loading service details...</div>
            </div>
        );
    }

    if (productQuery.isError || !productQuery.data) {
        return (
            <div className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 text-md text-error-primary md:px-8">
                    Could not load this service. Please return to browse services and try again.
                </div>
            </div>
        );
    }

    return <ServiceDetailBookingPage service={mapProductToServiceItem(productQuery.data)} />;
}
