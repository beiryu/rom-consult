"use client";

import { useMemo, useState } from "react";
import { CheckCircle } from "@untitledui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { useAuthStore } from "@/stores/auth-store";

type Signup01ModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
};

export const Signup01Modal = ({ isOpen, onOpenChange }: Signup01ModalProps) => {
    const router = useRouter();
    const registerSuccess = useAuthStore((state) => state.registerSuccess);
    const [password, setPassword] = useState("");
    const passwordRules = useMemo(
        () => ({
            minLength: password.length >= 8,
            hasSpecialCharacter: /[^A-Za-z0-9]/.test(password),
        }),
        [password],
    );

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
            <Modal>
                <Dialog>
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-120">
                        <CloseButton onClick={() => onOpenChange(false)} theme="light" size="sm" className="absolute top-3 right-3 sm:top-4 sm:right-4" />
                        <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                            <Image src="/assets/Favicon - Blue.svg" alt="RomConsult" width={249} height={44} className="h-12 w-auto" priority />
                            <div className="flex flex-col items-center justify-center gap-0.5">
                                <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                    Sign up
                                </AriaHeading>
                                <p className="text-center text-sm text-tertiary">Create your account to access expert consulting services.</p>
                            </div>
                        </div>
                        <div className="h-5 w-full" />
                        <Form
                            id="signup-form-modal"
                            className="flex flex-col gap-4 px-4 sm:px-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                const email = typeof data.email === "string" ? data.email : "";
                                const fullName = typeof data.fullName === "string" ? data.fullName : "";
                                const phoneNumber = typeof data.phoneNumber === "string" ? data.phoneNumber : "";

                                if (!email || !fullName || !phoneNumber) {
                                    return;
                                }

                                registerSuccess({
                                    email,
                                    token: `mock-token-${email}`,
                                    fullName,
                                    phoneNumber,
                                });
                                onOpenChange(false);
                                router.push("/dashboard");
                            }}
                        >
                            <Input
                                isRequired
                                hideRequiredIndicator
                                label="Full name"
                                name="fullName"
                                placeholder="Enter your full name"
                                size="md"
                                autoComplete="name"
                            />
                            <Input isRequired hideRequiredIndicator label="Email" name="email" placeholder="Enter your email" size="lg" autoComplete="email" />
                            <Input
                                isRequired
                                hideRequiredIndicator
                                label="Phone number"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                size="lg"
                                autoComplete="tel"
                            />
                            <Input
                                isRequired
                                hideRequiredIndicator
                                label="Password"
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                placeholder="Create a password"
                                size="lg"
                                minLength={8}
                                onChange={setPassword}
                            />
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className={passwordRules.minLength ? "size-5 text-fg-success-primary" : "size-5 text-fg-quaternary"} />
                                    <p className="text-md text-tertiary">Must be at least 8 characters</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle
                                        className={passwordRules.hasSpecialCharacter ? "size-5 text-fg-success-primary" : "size-5 text-fg-quaternary"}
                                    />
                                    <p className="text-md text-tertiary">Must contain one special character</p>
                                </div>
                            </div>
                        </Form>
                        <div className="flex flex-1 flex-col gap-3 p-4 pt-6 *:grow sm:px-6 sm:pt-8 sm:pb-6">
                            <Button type="submit" form="signup-form-modal" color="primary" size="md">
                                Create account
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
