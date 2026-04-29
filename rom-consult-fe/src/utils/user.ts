import type { AuthUser } from "@/stores/auth-store";

export const splitFullName = (fullName?: string) => {
    const trimmed = fullName?.trim() || "";
    if (!trimmed) {
        return {
            firstName: "",
            lastName: "",
        };
    }

    const [firstName, ...rest] = trimmed.split(/\s+/);
    return {
        firstName: firstName || "",
        lastName: rest.join(" "),
    };
};

export const getFullName = (user: Pick<AuthUser, "firstName" | "lastName">): string =>
    [user.firstName, user.lastName].filter(Boolean).join(" ");

export const getUserInitials = (user: Pick<AuthUser, "firstName" | "lastName" | "email">): string => {
    const firstInitial = user.firstName?.trim().charAt(0) || "";
    const lastInitial = user.lastName?.trim().charAt(0) || "";
    const initials = `${firstInitial}${lastInitial}`.toUpperCase();

    if (initials) {
        return initials;
    }

    return user.email.trim().charAt(0).toUpperCase() || "U";
};
