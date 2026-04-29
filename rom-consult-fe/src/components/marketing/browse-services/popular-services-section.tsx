"use client";

import { Button } from "@/components/base/buttons/button";
import { useProducts } from "@/hooks/use-products";
import { mapProductToServiceCardItem } from "./product-mappers";

export const PopularServicesSection = () => {
    const productsQuery = useProducts({ page: 1, limit: 8 });
    const services = (productsQuery.data?.items ?? []).map(mapProductToServiceCardItem);

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary md:text-sm md:tracking-wider">
                        Most booked
                    </span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Popular Services</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our most requested consulting services.</p>
                </div>

                <ul className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6 xl:grid-cols-4">
                    {services.map((service) => (
                        <li key={service.title}>
                            <article className="flex h-full min-h-full flex-col rounded-xl border border-secondary bg-primary p-5 shadow-xs transition duration-100 ease-linear md:p-6">
                                <h3 className="text-sm font-semibold text-primary">{service.title}</h3>
                                <div className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-0">
                                    <span className="text-display-xs font-semibold text-brand-secondary">{service.priceRange}</span>
                                </div>
                                <div className="mt-auto pt-6">
                                    <Button
                                        className="w-full"
                                        color="primary"
                                        size="md"
                                        href={`/browse-services/${service.slug}`}
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>

                {productsQuery.isError ? (
                    <div className="mt-6 rounded-xl border border-error_subtle bg-error-secondary p-4 text-sm text-error-primary">
                        Popular services are unavailable right now.
                    </div>
                ) : null}

                <div className="mt-10 flex justify-center md:mt-12">
                    <Button color="secondary" size="md" href="/browse-services">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};
