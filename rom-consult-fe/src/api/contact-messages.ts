import { apiClient } from "@/lib/api-client";

export type ContactMessagePayload = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
    privacyAccepted: boolean;
};

export type ContactMessageResponse = {
    id: string;
    createdAt: string;
};

export const submitContactMessage = async (payload: ContactMessagePayload): Promise<ContactMessageResponse> => {
    const { data } = await apiClient.post<ContactMessageResponse>("/contact-messages", payload);
    return data;
};
