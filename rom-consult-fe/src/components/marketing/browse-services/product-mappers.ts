import type { Product, ProductJsonValue } from "@/api/products";
import {
    defaultHowItWorks,
    defaultIncluded,
    defaultSessionMeta,
    type ServiceHowItWorksStep,
    type ServiceItem,
    type ServiceSessionMeta,
} from "./service-types";

type ServiceCardItem = Pick<ServiceItem, "id" | "slug" | "categoryLabel" | "title" | "priceRange" | "features">;

const isJsonObject = (value: ProductJsonValue): value is { [key: string]: ProductJsonValue } =>
    typeof value === "object" && value !== null && !Array.isArray(value);

const asStringArray = (value: ProductJsonValue | null): string[] => {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.filter((item): item is string => typeof item === "string");
};

const asSessionMeta = (value: ProductJsonValue | null): ServiceSessionMeta[] => {
    if (!Array.isArray(value)) {
        return [];
    }
    return value
        .filter(isJsonObject)
        .map((item, index) => ({
            id: typeof item.id === "string" ? item.id : `meta-${index + 1}`,
            label: typeof item.label === "string" ? item.label : "",
        }))
        .filter((item) => Boolean(item.label));
};

const asHowItWorks = (value: ProductJsonValue | null): ServiceHowItWorksStep[] => {
    if (!Array.isArray(value)) {
        return [];
    }
    return value
        .filter(isJsonObject)
        .map((item, index) => ({
            id: typeof item.id === "string" ? item.id : `step-${index + 1}`,
            title: typeof item.title === "string" ? item.title : "",
            description: typeof item.description === "string" ? item.description : "",
        }))
        .filter((item) => Boolean(item.title) && Boolean(item.description));
};

const formatPrice = (amount: string, currency: string): string => {
    const parsed = Number.parseFloat(amount);
    if (!Number.isFinite(parsed)) {
        return `${amount} ${currency}`;
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency || "USD",
        maximumFractionDigits: 2,
    }).format(parsed);
};

export const mapProductToServiceCardItem = (product: Product): ServiceCardItem => ({
    id: product.id,
    slug: product.slug,
    categoryLabel: product.category?.name ?? "General",
    title: product.name,
    priceRange: formatPrice(product.price, product.currency),
    features: asStringArray(product.features).slice(0, 3),
});

export const mapProductToServiceItem = (product: Product): ServiceItem => {
    const features = asStringArray(product.features);
    const included = asStringArray(product.included);
    const sessionMeta = asSessionMeta(product.sessionMeta);
    const howItWorks = asHowItWorks(product.howItWorks);

    return {
        id: product.id,
        slug: product.slug,
        categoryId: product.categoryId,
        categoryLabel: product.category?.name ?? "General",
        title: product.name,
        priceRange: formatPrice(product.price, product.currency),
        features: features.length > 0 ? features : [product.description],
        about: product.description,
        included: included.length > 0 ? included : defaultIncluded,
        sessionMeta: sessionMeta.length > 0 ? sessionMeta : defaultSessionMeta,
        howItWorks: howItWorks.length > 0 ? howItWorks : defaultHowItWorks,
    };
};
