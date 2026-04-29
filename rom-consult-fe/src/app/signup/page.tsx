"use client";

import {
    Building07,
    CoinsStacked01,
    Lock01,
    LogIn01,
    Mail01,
    Phone,
    ShieldTick,
    User01,
    UserPlus02,
    Users01,
    VideoRecorder,
} from "@untitledui/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { useAuthStore } from "@/stores/auth-store";

const FEATURE_CARDS = [
    {
        icon: VideoRecorder,
        title: "Live 1-on-1 sessions",
        description: "Connect with expert consultants via video call.",
    },
    {
        icon: Users01,
        title: "Trusted expert network",
        description: "Book specialists matched to your goals and industry.",
    },
    {
        icon: CoinsStacked01,
        title: "Transparent pricing",
        description: "See clear rates before you commit to a session.",
    },
    {
        icon: ShieldTick,
        title: "Secure by design",
        description: "Your data stays protected at every step.",
    },
] as const;

const PROVIDERS = [
    {
        icon: Building07,
        roleLabel: "Technology platform",
        orgName: "RomConsult",
    },
] as const;

export default function SignupPage() {
    const router = useRouter();
    const registerSuccess = useAuthStore((state) => state.registerSuccess);
    const [passwordsMismatch, setPasswordsMismatch] = useState(false);

    return (
        <main className="bg-primary px-4 py-10 sm:px-6 sm:py-16">
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xl">
                <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                    {/* Left: marketing */}
                    <aside className="flex flex-col justify-between gap-10 bg-brand-section p-8 lg:p-10">
                        <div className="flex flex-col gap-8">
                            <div className="w-fit rounded-lg bg-primary p-2 shadow-xs ring-1 ring-secondary ring-inset">
                                <Image src="/assets/Favicon - Blue.svg" alt="RomConsult" width={40} height={40} className="size-10" priority />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-display-xs font-semibold text-white">Join RomConsult</h1>
                                <p className="text-md text-tertiary_on-brand">Start your consulting journey today</p>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {FEATURE_CARDS.map(({ icon: Icon, title, description }) => (
                                    <li
                                        key={title}
                                        className="flex gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 ring-inset"
                                    >
                                        <Icon aria-hidden className="mt-0.5 size-10 shrink-0 text-fg-brand-secondary" />
                                        <div className="flex min-w-0 flex-col gap-1">
                                            <p className="text-md font-semibold text-white">{title}</p>
                                            <p className="text-sm text-tertiary_on-brand">{description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3 border-t border-white/10 pt-8">
                            {PROVIDERS.map(({ icon: Icon, roleLabel, orgName }) => (
                                <div
                                    key={roleLabel}
                                    className="flex gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 ring-inset"
                                >
                                    <Icon aria-hidden className="size-10 shrink-0 text-fg-brand-secondary" />
                                    <div className="flex min-w-0 flex-col gap-0.5">
                                        <p className="text-xs font-semibold tracking-wide text-tertiary_on-brand uppercase">
                                            {roleLabel}
                                        </p>
                                        <p className="truncate text-sm font-semibold text-white">{orgName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Right: form */}
                    <section className="flex flex-col justify-center bg-primary p-8 lg:p-10">
                        <Form
                            id="signup-form-page"
                            className="flex flex-col gap-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setPasswordsMismatch(false);
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                const email = typeof data.email === "string" ? data.email.trim() : "";
                                const fullName = typeof data.fullName === "string" ? data.fullName.trim() : "";
                                const phoneRaw = typeof data.phoneNumber === "string" ? data.phoneNumber.trim() : "";
                                const password = typeof data.password === "string" ? data.password : "";
                                const confirmPassword = typeof data.confirmPassword === "string" ? data.confirmPassword : "";

                                if (!email || !fullName) {
                                    return;
                                }

                                if (password !== confirmPassword) {
                                    setPasswordsMismatch(true);
                                    return;
                                }

                                registerSuccess({
                                    email,
                                    token: `mock-token-${email}`,
                                    fullName,
                                    ...(phoneRaw ? { phoneNumber: phoneRaw } : {}),
                                });
                                router.push("/dashboard");
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                <h2 className="text-display-xs font-semibold text-primary">Create account</h2>
                                <p className="text-md text-tertiary">Get started with your free consulting account</p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <Input
                                    isRequired
                                    label="Full name"
                                    name="fullName"
                                    placeholder="John Doe"
                                    size="md"
                                    autoComplete="name"
                                    icon={User01}
                                />
                                <Input
                                    isRequired
                                    label="Email address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="your.email@example.com"
                                    size="md"
                                    icon={Mail01}
                                    shortcut
                                />
                                <Input
                                    label="Phone number (optional)"
                                    name="phoneNumber"
                                    placeholder="+1 (555) 123-4567"
                                    size="md"
                                    autoComplete="tel"
                                    icon={Phone}
                                />
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <Input
                                        isRequired
                                        label="Password"
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="Min. 8 characters"
                                        size="lg"
                                        minLength={8}
                                        icon={Lock01}
                                        onChange={() => setPasswordsMismatch(false)}
                                    />
                                    <Input
                                        isRequired
                                        label="Confirm password"
                                        type="password"
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        placeholder="Repeat password"
                                        size="lg"
                                        icon={Lock01}
                                        onChange={() => setPasswordsMismatch(false)}
                                    />
                                </div>
                                {passwordsMismatch ? (
                                    <p className="text-sm text-error-primary" role="alert">
                                        Passwords do not match.
                                    </p>
                                ) : null}
                            </div>

                            <Button
                                type="submit"
                                size="md"
                                color="primary"
                                iconLeading={UserPlus02}
                                className="w-full"
                            >
                                Create free account
                            </Button>

                            <p className="text-center text-sm text-tertiary">
                                By creating an account, you agree to our{" "}
                                <Link href="/terms-of-service" className="font-semibold text-primary underline-offset-2 hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy-policy" className="font-semibold text-primary underline-offset-2 hover:underline">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </Form>

                        <div className="mt-6 flex flex-col gap-6">
                            <ContentDivider type="single-line">
                                <span className="px-2 text-sm font-medium text-tertiary">Already have an account?</span>
                            </ContentDivider>
                            <Button href="/login" size="md" color="secondary" iconLeading={LogIn01} className="w-full justify-center">
                                Sign in to your account
                            </Button>
                            <div className="flex items-start gap-3 rounded-lg border border-brand_alt bg-brand-secondary px-4 py-3">
                                <ShieldTick aria-hidden className="mt-0.5 size-5 shrink-0 text-fg-brand-secondary" />
                                <p className="text-sm font-medium text-brand-secondary">
                                    Your information is protected with 256-bit encryption
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
