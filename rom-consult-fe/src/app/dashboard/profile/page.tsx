"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { UpdateUserProfilePayload } from "@/api/users";
import { useUpdateProfile } from "@/hooks/use-user-profile";
import { Button } from "@/components/base/buttons/button";
import { PersonalInfoForm } from "@/components/application/profile/personal-info-form";
import { useAuthStore } from "@/stores/auth-store";

const DashboardProfilePage = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const user = useAuthStore((state) => state.user);
    const { mutate: updateProfile, isPending } = useUpdateProfile();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (!user) {
        return (
            <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
                <h1 className="text-display-xs font-semibold text-primary">Personal info</h1>
                <p className="text-md text-tertiary">You are not logged in or registered in this temporary session.</p>
                <Button color="primary" size="md" href="/">
                    Go to home
                </Button>
            </main>
        );
    }

    const handleSave = (payload: UpdateUserProfilePayload) => {
        setErrorMessage("");
        updateProfile(payload, {
            onSuccess: () => router.push("/dashboard"),
            onError: () => setErrorMessage("Failed to update profile."),
        });
    };

    return (
        <main className="bg-secondary py-10 md:py-14">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <PersonalInfoForm user={user} onCancel={() => router.push("/dashboard")} onSave={handleSave} isSaving={isPending} />
                {errorMessage ? <p className="mt-4 text-sm text-error-primary">{errorMessage}</p> : null}
            </div>
        </main>
    );
};

export default DashboardProfilePage;
