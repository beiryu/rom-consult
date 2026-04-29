"use client";

import { type FormEvent, useMemo, useState } from "react";
import { HelpCircle, Mail01 } from "@untitledui/icons";
import { uploadAvatarFile, type UpdateUserProfilePayload } from "@/api/users";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { FileUploadDropZone } from "@/components/application/file-upload/file-upload-base";
import type { AuthUser } from "@/stores/auth-store";
import { getFullName, getUserInitials } from "@/utils/user";

const MAX_PROFILE_IMAGE_BYTES = 3 * 1024 * 1024;

type PersonalInfoFormProps = {
    user: AuthUser;
    onCancel: () => void;
    onSave: (payload: UpdateUserProfilePayload) => void;
    isSaving?: boolean;
};

export const PersonalInfoForm = ({ user, onCancel, onSave, isSaving = false }: PersonalInfoFormProps) => {
    const [firstName, setFirstName] = useState(user.firstName ?? "");
    const [lastName, setLastName] = useState(user.lastName ?? "");
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone ?? "");
    const [avatarUrl, setAvatarUrl] = useState(user.avatar ?? "");
    const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const initials = useMemo(
        () => getUserInitials({ firstName: firstName || null, lastName: lastName || null, email }),
        [firstName, lastName, email],
    );

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
            setIsUploadingAvatar(true);
            setErrorMessage("");
            const { avatarUrl: uploadedAvatarUrl } = await uploadAvatarFile(file);
            setAvatarUrl(uploadedAvatarUrl);
        } catch {
            setErrorMessage("Could not upload the selected image.");
        } finally {
            setIsUploadingAvatar(false);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedFirstName = firstName.trim();
        const trimmedLastName = lastName.trim();
        const trimmedEmail = email.trim();
        const trimmedPhone = phone.trim();

        if (!trimmedFirstName || !trimmedLastName || !trimmedEmail) {
            setErrorMessage("Name and email are required.");
            return;
        }

        setErrorMessage("");
        onSave({
            email: trimmedEmail,
            firstName: trimmedFirstName,
            lastName: trimmedLastName,
            phone: trimmedPhone || undefined,
            avatar: avatarUrl || undefined,
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
                        <Button color="primary" size="md" type="submit" isLoading={isSaving} isDisabled={isSaving || isUploadingAvatar}>
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
                            src={avatarUrl || undefined}
                            alt={getFullName({ firstName: firstName || null, lastName: lastName || null }) || "Profile photo"}
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
                    {isUploadingAvatar ? <p className="text-sm text-tertiary">Uploading avatar...</p> : null}
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-start">
                    <p className="text-sm font-medium text-secondary">Phone number</p>
                    <Input
                        name="phone"
                        aria-label="Phone number"
                        value={phone}
                        onChange={setPhone}
                        placeholder="+1 (555) 123-4567"
                        size="md"
                    />
                </div>
            </Form>

            {errorMessage && <p className="px-6 pb-6 text-sm text-error-primary">{errorMessage}</p>}
        </section>
    );
};
