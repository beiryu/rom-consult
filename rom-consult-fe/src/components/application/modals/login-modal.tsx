"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { useAuthStore } from "@/stores/auth-store";

type LoginModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
};

export const LoginModal = ({ isOpen, onOpenChange }: LoginModalProps) => {
    const router = useRouter();
    const loginSuccess = useAuthStore((state) => state.loginSuccess);

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
            <Modal>
                <Dialog>
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-100">
                        <CloseButton onClick={() => onOpenChange(false)} theme="light" size="sm" className="absolute top-3 right-3 sm:top-4 sm:right-4" />
                        <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                            <Image src="/assets/Favicon - Blue.svg" alt="RomConsult" width={249} height={44} className="h-12 w-auto" priority />
                            <div className="flex flex-col items-center justify-center gap-0.5">
                                <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                    Log in to your account
                                </AriaHeading>
                                <p className="text-sm text-tertiary">Welcome back! Please enter your details.</p>
                            </div>
                        </div>
                        <div className="h-5 w-full" />
                        <Form
                            id="login-form-modal"
                            className="flex flex-col gap-5 px-4 sm:px-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                const email = typeof data.email === "string" ? data.email : "";

                                if (!email) {
                                    return;
                                }

                                loginSuccess({
                                    email,
                                    token: `mock-token-${email}`,
                                });
                                onOpenChange(false);
                                router.push("/dashboard");
                            }}
                        >
                            <div className="flex flex-col gap-4">
                                <Input isRequired hideRequiredIndicator label="Email" name="email" placeholder="Enter your email" size="md" />
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    size="lg"
                                />
                            </div>
                            <div className="flex justify-between">
                                <Checkbox label="Remember for 30 days" id="remember-me-checkbox" />
                                <Button href="#" size="md" color="link-color">
                                    Forgot password
                                </Button>
                            </div>
                        </Form>
                        <div className="flex flex-1 flex-col gap-3 p-4 pt-6 *:grow sm:px-6 sm:pt-8 sm:pb-6">
                            <Button type="submit" form="login-form-modal" color="primary" size="md">
                                Sign in
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
