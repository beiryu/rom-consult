import { apiClient } from "@/lib/api-client";

export type ConsultantApplicationPayload = {
    fullName: string;
    email: string;
    phone?: string;
    expertise: string;
    experience: string;
    bio: string;
    tier: "BRONZE" | "SILVER" | "GOLD";
    daysAvailable: string;
    timezone: string;
    timeSlots: string;
    linkedin?: string;
    website?: string;
    motivation: string;
    agreedToTerms: boolean;
};

export type ConsultantApplicationResponse = {
    id: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
};

export const submitConsultantApplication = async (
    payload: ConsultantApplicationPayload,
): Promise<ConsultantApplicationResponse> => {
    const { data } = await apiClient.post<ConsultantApplicationResponse>("/consultant-applications", payload);
    return data;
};
