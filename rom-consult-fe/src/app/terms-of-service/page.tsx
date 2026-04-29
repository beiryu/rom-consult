import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "Terms of Service — RomConsult",
    description: "Please read these terms carefully before using RomConsult services.",
};

export default function TermsOfServicePage() {
    return (
        <LegalPageShell
            title="Terms of Service"
            lastUpdated="28 Apr 2026"
            description="Please read these terms carefully before using our services."
        >
            <h3>Service-based business</h3>
            <p>
                RomConsult is a service-based business. We primarily provide 1-on-1 technical consulting services delivered through live video calls. Any
                complementary materials are bonuses provided to consulting clients.
            </p>

            <h3>Important disclaimer</h3>
            <p>
                RomConsult provides technical consulting and implementation services for cloud platforms and digital advertising systems. We do not guarantee
                specific financial results, earnings, or return on investment (ROI). All business outcomes vary based on individual execution, market conditions,
                and other factors beyond our control.
            </p>

            <h2>1. Acceptance of terms</h2>
            <p>By accessing and using RomConsult, you accept and agree to be bound by these terms and conditions.</p>

            <h2>2. Service description</h2>
            <p>
                RomConsult provides professional technical consulting services. Our primary services include:
            </p>
            <ul>
                <li>Live 1-on-1 consulting sessions via video call (Zoom and Google Meet).</li>
                <li>Technical implementation and configuration guidance.</li>
                <li>Digital platform setup and optimization.</li>
                <li>Server management and cloud hosting assistance.</li>
                <li>Analytics tracking and campaign configuration.</li>
            </ul>
            <p>
                We do not sell standalone digital products. Any learning materials are provided as complementary resources to consulting clients.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
                The materials on RomConsult are provided on an &quot;as is&quot; basis. RomConsult makes no warranties, expressed or implied, and disclaims all
                other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
                In no event shall RomConsult or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or
                due to business interruption) arising out of the use or inability to use the materials on RomConsult.
            </p>

            <h2>5. Refund policy for consulting services</h2>
            <p>
                Consulting services may be cancelled with at least 24 hours notice for a full refund. Sessions cancelled with less than 24 hours notice are
                non-refundable. Please review our{" "}
                <Link className="text-brand-secondary underline" href="/refund-policy">
                    Refund Policy
                </Link>{" "}
                for complete details.
            </p>

            <h2>6. Contact information</h2>
            <p>
                For support and service inquiries, contact RomConsult at{" "}
                <Link className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </Link>
                .
            </p>
        </LegalPageShell>
    );
}
