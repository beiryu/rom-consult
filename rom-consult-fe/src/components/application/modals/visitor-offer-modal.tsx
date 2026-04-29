"use client";

import { Check, Clock, Copy01, Gift01, Rocket02 } from "@untitledui/icons";
import { Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { useClipboard } from "@/hooks/use-clipboard";

type VisitorOfferModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    eyebrow?: string;
    title?: string;
    discountLabel?: string;
    description?: string;
    code?: string;
    ctaLabel?: string;
    ctaHref?: string;
    footnote?: string;
};

export const VisitorOfferModal = ({
    isOpen,
    onOpenChange,
    eyebrow = "New visitor offer",
    title = "Welcome to RomConsult!",
    discountLabel = "15% OFF",
    description = "your first consulting session",
    code = "WELCOME15",
    ctaLabel = "Browse Services",
    ctaHref = "/browse-services",
    footnote = "Valid for next 24 hours",
}: VisitorOfferModalProps) => {
    const { copied, copy } = useClipboard();
    const isCopied = Boolean(copied);

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
            <Modal>
                <Dialog>
                    <div className="relative w-full max-w-100 overflow-hidden rounded-3xl bg-primary p-6 shadow-xl sm:p-8">
                        <CloseButton
                            onClick={() => onOpenChange(false)}
                            theme="light"
                            size="sm"
                            className="absolute top-3 right-3 sm:top-4 sm:right-4"
                        />

                        <div className="flex flex-col items-center text-center">
                            <span className="rounded-full bg-brand-solid px-3.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                                {eyebrow}
                            </span>

                            <FeaturedIcon icon={Gift01} color="brand" theme="light" size="lg" className="mt-5" />

                            <AriaHeading slot="title" className="mt-5 text-display-xs font-semibold text-primary sm:text-display-sm">
                                {title}
                            </AriaHeading>
                            <p className="mt-2 text-sm text-tertiary sm:text-md">
                                Get <span className="font-semibold text-brand-secondary">{discountLabel}</span> {description}
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl bg-secondary p-4">
                            <p className="text-center text-xs font-medium tracking-wider text-tertiary uppercase">Your code:</p>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-secondary bg-primary px-3 py-3">
                                    <p className="font-mono text-md font-semibold tracking-[0.2em] text-primary sm:text-lg">{code}</p>
                                </div>
                                <Button
                                    size="md"
                                    color="secondary"
                                    iconLeading={isCopied ? Check : Copy01}
                                    onClick={() => copy(code)}
                                    aria-label={isCopied ? "Code copied" : "Copy code"}
                                >
                                    {isCopied ? "Copied" : "Copy"}
                                </Button>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            color="primary"
                            href={ctaHref}
                            iconLeading={Rocket02}
                            className="mt-6 w-full"
                            onClick={() => onOpenChange(false)}
                        >
                            {ctaLabel}
                        </Button>

                        <div className="mt-4 flex items-center justify-center gap-1.5 text-tertiary">
                            <Clock aria-hidden="true" className="size-4 shrink-0" />
                            <p className="text-sm">{footnote}</p>
                        </div>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
