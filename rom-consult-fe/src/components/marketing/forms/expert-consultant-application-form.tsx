"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { HelpCircle, Link01, Send01 } from "@untitledui/icons";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { submitConsultantApplication } from "@/api/consultant-applications";
import { Button } from "@/components/base/buttons/button";
import { CheckboxBase } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { Select } from "@/components/base/select/select";
import { NativeSelect } from "@/components/base/select/select-native";
import type { SelectItemType } from "@/components/base/select/select-shared";
import { TextArea } from "@/components/base/textarea/textarea";
import { useToastHelpers } from "@/providers/alerts-provider";
import { cx } from "@/utils/cx";

const expertiseItems: SelectItemType[] = [
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "cloud-architecture", label: "Cloud Architecture" },
    { id: "analytics", label: "Analytics & Data" },
    { id: "seo", label: "SEO" },
    { id: "paid-media", label: "Paid Media (Google Ads, Meta)" },
    { id: "content-strategy", label: "Content Strategy" },
    { id: "devops", label: "DevOps / Platform Engineering" },
    { id: "other", label: "Other" },
];

const experienceItems: SelectItemType[] = [
    { id: "0-2", label: "0–2 years" },
    { id: "3-5", label: "3–5 years" },
    { id: "6-10", label: "6–10 years" },
    { id: "10+", label: "10+ years" },
];

const availabilityItems: SelectItemType[] = [
    { id: "weekdays", label: "Weekdays" },
    { id: "weekends", label: "Weekends" },
    { id: "flexible", label: "Flexible" },
];

const timezoneItems: SelectItemType[] = [
    { id: "et", label: "Eastern (ET)" },
    { id: "ct", label: "Central (CT)" },
    { id: "mt", label: "Mountain (MT)" },
    { id: "pt", label: "Pacific (PT)" },
    { id: "utc", label: "UTC / Global" },
];

const timeSlotItems: SelectItemType[] = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" },
    { id: "flex", label: "Flexible" },
];

const tiers = [
    { id: "bronze", title: "Bronze", subtitle: "Entry-level", rate: "$5/hr" },
    { id: "silver", title: "Silver", subtitle: "Intermediate", rate: "$10/hr" },
    { id: "gold", title: "Gold", subtitle: "Expert", rate: "$20/hr" },
] as const;

type TierId = (typeof tiers)[number]["id"];

const FormSection = ({ title, description, children }: { title: string; description?: string; children: ReactNode }) => (
    <div className="flex flex-col gap-4 border-t border-secondary pt-8 first:border-t-0 first:pt-0">
        <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-primary">{title}</h2>
            {description && <p className="text-sm text-tertiary">{description}</p>}
        </div>
        {children}
    </div>
);

export const ExpertConsultantApplicationForm = () => {
    const toast = useToastHelpers();
    const [tier, setTier] = useState<TierId>("bronze");
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [expertise, setExpertise] = useState("");
    const [experience, setExperience] = useState("");
    const [daysAvailable, setDaysAvailable] = useState("");
    const [timezone, setTimezone] = useState("");
    const [timeSlots, setTimeSlots] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className="w-full rounded-2xl border border-secondary bg-primary p-6 shadow-lg md:p-8 lg:p-10">
            <Form
                className="flex flex-col gap-10"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setErrorMessage("");

                    if (!agreedToTerms) {
                        const message = "Please accept the Terms of Service and Privacy Policy.";
                        setErrorMessage(message);
                        toast.error(message, "Cannot submit yet");
                        return;
                    }

                    const form = e.currentTarget;
                    const data = Object.fromEntries(new FormData(form));
                    const fullName = typeof data.fullName === "string" ? data.fullName.trim() : "";
                    const email = typeof data.email === "string" ? data.email.trim() : "";
                    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
                    const bio = typeof data.bio === "string" ? data.bio.trim() : "";
                    const linkedin = typeof data.linkedin === "string" ? data.linkedin.trim() : "";
                    const website = typeof data.website === "string" ? data.website.trim() : "";
                    const motivation = typeof data.motivation === "string" ? data.motivation.trim() : "";

                    if (!fullName || !email || !bio || !motivation || !expertise || !experience || !daysAvailable || !timezone || !timeSlots) {
                        const message = "Please complete all required fields before submitting.";
                        setErrorMessage(message);
                        toast.error(message, "Missing required fields");
                        return;
                    }

                    setIsSubmitting(true);
                    try {
                        await submitConsultantApplication({
                            fullName,
                            email,
                            phone: phone || undefined,
                            expertise,
                            experience,
                            bio,
                            tier: tier.toUpperCase() as "BRONZE" | "SILVER" | "GOLD",
                            daysAvailable,
                            timezone,
                            timeSlots,
                            linkedin: linkedin || undefined,
                            website: website || undefined,
                            motivation,
                            agreedToTerms: true,
                        });
                        toast.success("Application submitted successfully. We will review your profile within 2-3 business days.", "Application submitted");
                        form.reset();
                        setTier("bronze");
                        setAgreedToTerms(false);
                        setExpertise("");
                        setExperience("");
                        setDaysAvailable("");
                        setTimezone("");
                        setTimeSlots("");
                    } catch (error) {
                        const message =
                            error instanceof Error ? error.message : "Unable to submit application right now. Please try again in a moment.";
                        setErrorMessage(message);
                        toast.error(message, "Submission failed");
                    } finally {
                        setIsSubmitting(false);
                    }
                }}
            >
                <FormSection title="Personal Information" description="Please provide your contact details so we can review your application.">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                        <Input name="fullName" label="Full Name" placeholder="John Smith" isRequired />
                        <Input name="email" label="Email Address" type="email" placeholder="john@example.com" isRequired />
                        <InputGroup
                            name="phone"
                            label="Phone Number"
                            isRequired
                            leadingAddon={
                                <NativeSelect
                                    aria-label="Country"
                                    options={[
                                        { value: "US", label: "US" },
                                        { value: "CA", label: "CA" },
                                        { value: "EU", label: "EU" },
                                    ]}
                                />
                            }
                        >
                            <InputBase name="phone" type="tel" placeholder="+1 (555) 000-0000" tooltip="Include country code if outside the US." />
                        </InputGroup>
                    </div>
                </FormSection>

                <FormSection
                    title="Professional Background"
                    description="Share your core expertise and experience so we can match you with the right projects."
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                        <Select
                            name="expertise"
                            label="Area of Expertise"
                            placeholder="Select your expertise"
                            items={expertiseItems}
                            selectedKey={expertise || null}
                            onSelectionChange={(key) => setExpertise(String(key ?? ""))}
                            isRequired
                        >
                            {(item) => <Select.Item id={item.id} label={item.label} />}
                        </Select>
                        <Select
                            name="experience"
                            label="Years of Experience"
                            placeholder="Select experience"
                            items={experienceItems}
                            selectedKey={experience || null}
                            onSelectionChange={(key) => setExperience(String(key ?? ""))}
                            isRequired
                        >
                            {(item) => <Select.Item id={item.id} label={item.label} />}
                        </Select>
                    </div>
                    <TextArea
                        name="bio"
                        label="Professional Bio"
                        placeholder="Tell us about your experience, skills, and achievements..."
                        rows={5}
                        isRequired
                        hint="Minimum 100 characters"
                    />
                </FormSection>

                <FormSection title="Rate & Availability" description="Set your preferred rate tier and schedule availability for client engagements.">
                    <div>
                        <p className="text-sm font-medium text-secondary">
                            Choose Your Tier<span className="text-brand-tertiary"> *</span>
                        </p>
                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {tiers.map((t) => {
                                const selected = tier === t.id;
                                return (
                                    <button
                                        key={t.id}
                                        type="button"
                                        onClick={() => setTier(t.id)}
                                        className={cx(
                                            "flex flex-col rounded-xl border bg-secondary p-4 text-left outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2",
                                            selected ? "border-brand ring-2 ring-brand" : "border-secondary hover:border-secondary_alt",
                                        )}
                                    >
                                        <span className="text-sm font-semibold text-primary">{t.title}</span>
                                        <span className="text-sm text-tertiary">({t.subtitle})</span>
                                        <span className="mt-2 text-lg font-semibold text-brand-secondary">{t.rate}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <input type="hidden" name="tier" value={tier} />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                        <Select
                            name="daysAvailable"
                            label="Days Available"
                            placeholder="Select availability"
                            items={availabilityItems}
                            selectedKey={daysAvailable || null}
                            onSelectionChange={(key) => setDaysAvailable(String(key ?? ""))}
                            isRequired
                        >
                            {(item) => <Select.Item id={item.id} label={item.label} />}
                        </Select>
                        <Select
                            name="timezone"
                            label="Timezone"
                            placeholder="Select timezone"
                            items={timezoneItems}
                            selectedKey={timezone || null}
                            onSelectionChange={(key) => setTimezone(String(key ?? ""))}
                            isRequired
                        >
                            {(item) => <Select.Item id={item.id} label={item.label} />}
                        </Select>
                        <Select
                            name="timeSlots"
                            label="Preferred Time Slots"
                            placeholder="Select time preference"
                            items={timeSlotItems}
                            selectedKey={timeSlots || null}
                            onSelectionChange={(key) => setTimeSlots(String(key ?? ""))}
                            isRequired
                        >
                            {(item) => <Select.Item id={item.id} label={item.label} />}
                        </Select>
                    </div>
                </FormSection>

                <FormSection title="Online Presence (Optional)" description="Add profile links so clients can better understand your background and work.">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                        <Input name="linkedin" label="LinkedIn Profile" placeholder="linkedin.com/in/yourprofile" icon={Link01} />
                        <Input name="website" label="Personal Website" placeholder="yourwebsite.com" icon={Link01} />
                    </div>
                </FormSection>

                <FormSection title="Your Motivation" description="Tell us why you want to join and how you plan to contribute as a consultant.">
                    <TextArea
                        name="motivation"
                        label="Why do you want to become an expert?"
                        placeholder="Share what motivates you to help others..."
                        rows={5}
                        isRequired
                    />
                </FormSection>

                <div className="flex flex-col gap-5">
                    <AriaCheckbox
                        isSelected={agreedToTerms}
                        onChange={setAgreedToTerms}
                        className={(state) =>
                            cx(
                                "flex cursor-pointer items-start gap-3 rounded-lg outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2",
                                state.isDisabled && "cursor-not-allowed opacity-50",
                            )
                        }
                    >
                        {({ isSelected, isDisabled, isFocusVisible }) => (
                            <>
                                <CheckboxBase size="md" isSelected={isSelected} isDisabled={isDisabled} isFocusVisible={isFocusVisible} className="mt-0.5" />
                                <span className="text-md text-secondary">
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="font-semibold text-brand-secondary underline underline-offset-2 outline-focus-ring transition duration-100 ease-linear hover:text-brand-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="font-semibold text-brand-secondary underline underline-offset-2 outline-focus-ring transition duration-100 ease-linear hover:text-brand-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Privacy Policy
                                    </a>
                                </span>
                            </>
                        )}
                    </AriaCheckbox>

                    <div className="flex gap-3 rounded-xl border border-secondary bg-secondary p-4">
                        <HelpCircle className="mt-0.5 size-5 shrink-0 text-fg-brand-primary" aria-hidden />
                        <p className="text-sm text-tertiary md:text-md">
                            <span className="font-semibold text-secondary">Application Review: </span>
                            All applications are reviewed within 2–3 business days. You&apos;ll receive an email notification with the next steps.
                        </p>
                    </div>

                    {errorMessage ? <p className="text-sm text-error-primary">{errorMessage}</p> : null}

                    <Button type="submit" size="xl" iconLeading={Send01} className="w-full" isDisabled={!agreedToTerms || isSubmitting} isLoading={isSubmitting}>
                        Submit Application
                    </Button>
                </div>
            </Form>
        </div>
    );
};
