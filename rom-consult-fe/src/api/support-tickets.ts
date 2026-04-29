import { apiClient } from "@/lib/api-client";

export type SupportTicketPayload = {
    fullName: string;
    email: string;
    bookingId?: string;
    consultantId?: string;
    category: "technical" | "billing" | "account" | "service" | "other";
    subject: string;
    message: string;
};

export type SupportTicketResponse = {
    id: string;
    publicReference: string;
    status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
    createdAt: string;
};

export const submitSupportTicket = async (payload: SupportTicketPayload): Promise<SupportTicketResponse> => {
    const { data } = await apiClient.post<SupportTicketResponse>("/support-tickets", payload);
    return data;
};

export const lookupSupportTicket = async (payload: { ticketId: string; email: string }): Promise<SupportTicketResponse> => {
    const { data } = await apiClient.get<SupportTicketResponse>("/support-tickets/lookup", {
        params: {
            ticketId: payload.ticketId,
            email: payload.email,
        },
    });
    return data;
};
