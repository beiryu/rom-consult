export interface ServiceHowItWorksStep {
    id: string;
    title: string;
    description: string;
}

export interface ServiceSessionMeta {
    id: string;
    label: string;
}

export interface ServiceItem {
    id: string;
    slug: string;
    categoryId: string;
    categoryLabel: string;
    title: string;
    priceRange: string;
    features: string[];
    about: string;
    included: string[];
    sessionMeta: ServiceSessionMeta[];
    howItWorks: ServiceHowItWorksStep[];
}

export const defaultIncluded: string[] = [
    "Live 1-on-1 video consultation with screen sharing",
    "Personalized strategies tailored to your business",
    "Expert guidance from certified professionals",
    "Q&A session to address your specific questions",
    "Post-session documentation and action items",
    "Recording available upon request",
];

export const defaultSessionMeta: ServiceSessionMeta[] = [
    { id: "live-video", label: "Live Video Session" },
    { id: "one-hour", label: "1 Hour" },
    { id: "expert", label: "Expert Consultant" },
];

export const defaultHowItWorks: ServiceHowItWorksStep[] = [
    {
        id: "book",
        title: "Book Your Session",
        description: "Select your tier and complete payment to reserve your 1-hour slot.",
    },
    {
        id: "confirm",
        title: "Get Confirmation",
        description: "Receive your session confirmation and meeting details by email.",
    },
    {
        id: "join",
        title: "Join The Call",
        description: "Connect with your consultant at the scheduled time for the live session.",
    },
    {
        id: "results",
        title: "Get Results",
        description: "Leave with actionable recommendations tailored to your business goals.",
    },
];
