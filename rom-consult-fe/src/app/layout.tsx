import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BannerCountdownBrandFullWidth } from "@/components/shared-assets/banners/banner-countdown-brand-full-width";
import { SitePromoModals } from "@/components/application/modals/site-promo-modals";
import { FooterLarge12 } from "@/components/marketing/footers/footer-large-12";
import { Header } from "@/components/marketing/header-navigation/header";
import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "RomConsult — Digital marketing and cloud consulting",
    description:
        "Digital marketing and cloud consulting for startups and SMEs.",
    openGraph: {
        title: "RomConsult",
        description: "Digital marketing and cloud consulting for startups and SMEs.",
        type: "website",
        images: [
            {
                url: "/assets/OG.png",
                width: 1200,
                height: 630,
                alt: "RomConsult - Digital marketing and cloud consulting for startups and SMEs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RomConsult",
        description: "Digital marketing and cloud consulting for startups and SMEs.",
        images: ["/assets/OG.png"],
    },
    icons: {
        icon: [
            { url: "/assets/Favicon - Blue.svg", type: "image/svg+xml" },
            { url: "/assets/Favicon - Blue.png", type: "image/png" },
        ],
        apple: "/assets/Favicon - Blue.png",
        shortcut: "/assets/Favicon - Blue.svg",
    },
};

export const viewport: Viewport = {
    themeColor: "#1E74FF",
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>
                        <QueryProvider>
                            <div className="bg-primary">
                                <BannerCountdownBrandFullWidth />
                                <Header />
                                {children}
                                <FooterLarge12 />
                                <SitePromoModals />
                            </div>
                        </QueryProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
