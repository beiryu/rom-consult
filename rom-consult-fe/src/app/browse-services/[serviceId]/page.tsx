import { notFound } from "next/navigation";
import { ServiceDetailBookingPage } from "@/components/marketing/browse-services/service-detail-booking-page";
import { getServiceById } from "@/components/marketing/browse-services/services-data";

interface ServiceBookingPageProps {
    params: Promise<{ serviceId: string }>;
}

export default async function ServiceBookingPage({ params }: ServiceBookingPageProps) {
    const { serviceId } = await params;
    const service = getServiceById(serviceId);

    if (!service) {
        notFound();
    }

    return <ServiceDetailBookingPage service={service} />;
}
