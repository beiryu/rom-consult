"use client";

import { Building07, CheckCircle, Lock01, LogIn01, Mail01, ShieldTick, UserPlus02 } from "@untitledui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { useAuthStore } from "@/stores/auth-store";
import { cx } from "@/utils/cx";

const FEATURE_BULLETS = [
    "Secure & encrypted login",
    "Access your bookings",
    "Track session history",
    "24/7 support access",
] as const;

const PROVIDERS = [
    {
        icon: Building07,
        roleLabel: "Technology platform",
        orgName: "RomConsult",
    },
] as const;

export default function LoginPage() {
    const router = useRouter();
    const loginSuccess = useAuthStore((state) => state.loginSuccess);

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
                                <h1 className="text-display-xs font-semibold text-white">Welcome back</h1>
                                <p className="text-md text-tertiary_on-brand">Sign in to your consulting account</p>
                            </div>
                            <ul className="flex flex-col">
                                {FEATURE_BULLETS.map((text, index) => (
                                    <li
                                        key={text}
                                        className={cx("flex gap-3 py-4", index > 0 && "border-t border-white/10")}
                                    >
                                        <CheckCircle aria-hidden className="mt-0.5 size-5 shrink-0 text-fg-brand-secondary" />
                                        <span className="text-md text-white">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
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
                            id="login-form-page"
                            className="flex flex-col gap-6"
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
                                router.push("/dashboard");
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                <h2 className="text-display-xs font-semibold text-primary">Sign in</h2>
                                <p className="text-md text-tertiary">Enter your credentials to access your dashboard</p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <Input
                                    isRequired
                                    hideRequiredIndicator
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
                                    isRequired
                                    hideRequiredIndicator
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    size="lg"
                                    icon={Lock01}
                                />
                            </div>

                            <Button
                                type="submit"
                                size="md"
                                color="primary"
                                iconLeading={LogIn01}
                                className="w-full"
                            >
                                Sign in
                            </Button>
                        </Form>

                        <div className="mt-6 flex flex-col gap-6">
                            <ContentDivider type="single-line">
                                <span className="px-2 text-sm font-medium text-tertiary">New to RomConsult?</span>
                            </ContentDivider>
                            <Button
                                href="/signup"
                                size="md"
                                color="secondary"
                                iconLeading={UserPlus02}
                                className="w-full justify-center"
                            >
                                Create a free account
                            </Button>
                            <div className="flex items-start gap-3 rounded-lg border border-brand_alt bg-brand-secondary px-4 py-3">
                                <ShieldTick aria-hidden className="mt-0.5 size-5 shrink-0 text-fg-brand-secondary" />
                                <p className="text-sm font-medium text-brand-secondary">
                                    Protected by 256-bit SSL encryption
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
