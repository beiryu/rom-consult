"use client";

import { type FormEvent, useMemo, useState } from "react";
import { HelpCircle, Mail01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { FileUploadDropZone } from "@/components/application/file-upload/file-upload-base";
import type { AuthUser } from "@/stores/auth-store";

const MAX_PROFILE_IMAGE_BYTES = 3 * 1024 * 1024;

const splitFullName = (fullName?: string) => {
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

const getInitials = (firstName: string, lastName: string, email: string) => {
    const firstInitial = firstName.trim().charAt(0);
    const lastInitial = lastName.trim().charAt(0);
    const initials = `${firstInitial}${lastInitial}`.toUpperCase();

    if (initials) {
        return initials;
    }

    return email.trim().charAt(0).toUpperCase();
};

const toDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
        reader.onerror = () => reject(new Error("Failed to read file."));
        reader.readAsDataURL(file);
    });

type PersonalInfoFormProps = {
    user: AuthUser;
    onCancel: () => void;
    onSave: (payload: Pick<AuthUser, "email" | "fullName" | "profilePhotoDataUrl">) => void;
};

export const PersonalInfoForm = ({ user, onCancel, onSave }: PersonalInfoFormProps) => {
    const { firstName: initialFirstName, lastName: initialLastName } = useMemo(() => splitFullName(user.fullName), [user.fullName]);
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [email, setEmail] = useState(user.email);
    const [profilePhotoDataUrl, setProfilePhotoDataUrl] = useState(user.profilePhotoDataUrl || "");
    const [errorMessage, setErrorMessage] = useState("");

    const initials = getInitials(firstName, lastName, email);

    const handlePhotoDrop = async (files: FileList) => {
        const file = files.item(0);
        if (!file) {
            return;
        }

        if (file.size > MAX_PROFILE_IMAGE_BYTES) {
            setErrorMessage("Photo is too large. Please upload an image smaller than 3MB.");
            return;
        }

        try {
            const dataUrl = await toDataUrl(file);
            if (!dataUrl) {
                setErrorMessage("Could not read the selected image.");
                return;
            }

            setErrorMessage("");
            setProfilePhotoDataUrl(dataUrl);
        } catch {
            setErrorMessage("Could not read the selected image.");
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedFirstName = firstName.trim();
        const trimmedLastName = lastName.trim();
        const trimmedEmail = email.trim();

        if (!trimmedFirstName || !trimmedLastName || !trimmedEmail) {
            setErrorMessage("Name and email are required.");
            return;
        }

        setErrorMessage("");
        onSave({
            email: trimmedEmail,
            fullName: `${trimmedFirstName} ${trimmedLastName}`.trim(),
            profilePhotoDataUrl: profilePhotoDataUrl || undefined,
        });
    };

    return (
        <section className="rounded-2xl border border-secondary bg-primary shadow-xs">
            <Form onSubmit={handleSubmit} className="divide-y divide-secondary">
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h1 className="text-lg font-semibold text-primary">Personal info</h1>
                        <p className="text-sm text-tertiary">Update your photo and personal details here.</p>
                    </div>

                    <div className="flex w-full flex-wrap gap-3 md:w-auto">
                        <Button color="secondary" size="md" onClick={onCancel} type="button">
                            Cancel
                        </Button>
                        <Button color="primary" size="md" type="submit">
                            Save
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-start">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-secondary">
                            Name <span className="text-brand-tertiary">*</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Input
                            name="firstName"
                            aria-label="First name"
                            value={firstName}
                            onChange={setFirstName}
                            placeholder="First name"
                            isRequired
                            size="md"
                        />
                        <Input
                            name="lastName"
                            aria-label="Last name"
                            value={lastName}
                            onChange={setLastName}
                            placeholder="Last name"
                            isRequired
                            size="md"
                        />
                    </div>
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-start">
                    <p className="text-sm font-medium text-secondary">
                        Email address <span className="text-brand-tertiary">*</span>
                    </p>
                    <Input
                        name="email"
                        aria-label="Email address"
                        value={email}
                        onChange={setEmail}
                        type="email"
                        icon={Mail01}
                        placeholder="olivia@untitledui.com"
                        isRequired
                        size="md"
                    />
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-start">
                    <div className="space-y-1">
                        <p className="flex items-center gap-1 text-sm font-medium text-secondary">
                            Your photo <span className="text-brand-tertiary">*</span>
                            <Tooltip title="Profile photo" description="Upload an image that will appear on your profile.">
                                <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover">
                                    <HelpCircle className="size-4" />
                                </TooltipTrigger>
                            </Tooltip>
                        </p>
                        <p className="text-sm text-tertiary">This will be displayed on your profile.</p>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <Avatar
                            size="xl"
                            src={profilePhotoDataUrl || undefined}
                            alt={user.fullName || "Profile photo"}
                            initials={initials}
                            border
                        />
                        <FileUploadDropZone
                            className="w-full md:min-h-34"
                            accept="image/*"
                            allowsMultiple={false}
                            maxSize={MAX_PROFILE_IMAGE_BYTES}
                            onDropFiles={handlePhotoDrop}
                            onDropUnacceptedFiles={() => setErrorMessage("Please upload a valid image file (SVG, PNG, JPG, GIF).")}
                            onSizeLimitExceed={() => setErrorMessage("Photo is too large. Please upload an image smaller than 3MB.")}
                        />
                    </div>
                </div>
            </Form>

            {errorMessage && <p className="px-6 pb-6 text-sm text-error-primary">{errorMessage}</p>}
        </section>
    );
};
