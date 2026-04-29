import { Award01, Award02, Award03 } from "@untitledui/icons";

export type TierId = "bronze" | "silver" | "gold";

export interface TierOption {
    id: TierId;
    title: string;
    subtitle: string;
    rate: number;
    icon: typeof Award01;
    isPopular?: boolean;
}

export const suggestedSlot = "Next business day • 10:00 AM";

export const tierOptions: TierOption[] = [
    {
        id: "bronze",
        title: "Bronze",
        subtitle: "Entry-level guidance",
        rate: 5,
        icon: Award01,
    },
    {
        id: "silver",
        title: "Silver",
        subtitle: "Intermediate expertise",
        rate: 10,
        icon: Award02,
        isPopular: true,
    },
    {
        id: "gold",
        title: "Gold",
        subtitle: "Expert consultation",
        rate: 20,
        icon: Award03,
    },
];

export const platformOptions = [
    { id: "zoom", label: "Zoom" },
    { id: "google-meet", label: "Google Meet" },
    { id: "microsoft-teams", label: "Microsoft Teams" },
] as const;

export type PlatformId = (typeof platformOptions)[number]["id"];

export const formatCurrency = (value: number) => `$${value.toFixed(2)}`;

export const getTierById = (tierId: string | null | undefined) => tierOptions.find((tier) => tier.id === tierId) ?? tierOptions[0];

export const getPlatformById = (platformId: string | null | undefined) => platformOptions.find((platform) => platform.id === platformId) ?? platformOptions[0];
