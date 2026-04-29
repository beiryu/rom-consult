import { Button } from "@/components/base/buttons/button";

export const CTACardHorizontal = () => {
    return (
        <section id="contact" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            <span className="hidden md:inline">Ready to move your project forward?</span>
                            <span className="md:hidden">Ready to move forward?</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                            Partner with Rum Consult for practical strategy, clear execution, and measurable results.
                        </p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl" href="/become-a-consultant">
                            Become a consultant
                        </Button>
                        <Button size="xl" href="/browse-services">
                            Book a consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
