import type { Metadata } from "next";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "AML/CFT Policy — RomConsult",
    description: "Anti-Money Laundering and Counter-Terrorism Financing policy for RomConsult.",
};

export default function AmlCftPolicyPage() {
    return (
        <LegalPageShell
            title="AML/CFT Policy"
            lastUpdated="15 Jan 2026"
            description="This AML/CFT policy explains RomConsult controls for preventing money laundering and terrorist financing."
        >
            <h2>1. Company overview</h2>
            <p>
                This Anti-Money Laundering and Counter-Terrorism Financing (AML/CFT) Policy applies to RomConsult.
            </p>
            <p>
                RomConsult provides professional consulting services in digital marketing, cloud infrastructure, and business technology. We are a low-risk,
                non-custodial service provider. We do not hold, transfer, or process funds on behalf of third parties. Payments received are solely for services
                rendered directly to clients.
            </p>

            <h2>2. Risk profile</h2>
            <p>RomConsult maintains a low-risk profile for money laundering and terrorist financing due to the following factors:</p>
            <ul>
                <li>We provide professional consulting services and do not offer financial services.</li>
                <li>We do not hold client funds or act as an intermediary for payments.</li>
                <li>Transactions are direct payments for services rendered.</li>
                <li>Payments are processed through regulated third-party payment processors (Stripe, PayPal, Square).</li>
                <li>Our client base consists primarily of businesses and professionals in established markets.</li>
            </ul>

            <h2>3. Client verification procedures</h2>
            <p>Before establishing a business relationship, we verify client legitimacy through:</p>
            <ul>
                <li>Collection of client name, email address, and contact information.</li>
                <li>Verification of email address through confirmation.</li>
                <li>For business clients, collection of company name and business details.</li>
                <li>Review of payment method to ensure it originates from a legitimate, regulated source.</li>
                <li>Rejection of clients who refuse to provide basic identification information.</li>
            </ul>
            <p>
                Enhanced verification may be conducted for high-value transactions or when risk indicators are present.
            </p>

            <h2>4. Transaction monitoring</h2>
            <p>We monitor transactions for suspicious activity, including:</p>
            <ul>
                <li>Unusually large or frequent purchases inconsistent with a client&apos;s stated needs.</li>
                <li>Requests to split transactions without a legitimate business reason.</li>
                <li>Payments from jurisdictions unrelated to a client&apos;s stated location.</li>
                <li>Attempts to use multiple payment methods for a single transaction.</li>
                <li>Clients who are evasive about identity or business purpose.</li>
            </ul>
            <p>
                Suspicious activity is escalated internally for review and, where required by law, reported to the appropriate authorities.
            </p>

            <h2>5. Sanctions screening</h2>
            <p>We do not provide services to individuals, entities, or residents of countries subject to comprehensive sanctions. We screen against:</p>
            <ul>
                <li>UK HM Treasury Sanctions List.</li>
                <li>US OFAC Specially Designated Nationals (SDN) List.</li>
                <li>EU Consolidated Sanctions List.</li>
            </ul>
            <p>
                We do not provide services to clients located in or associated with sanctioned jurisdictions including, but not limited to, North Korea, Iran,
                Syria, Cuba, and the Crimea, Donetsk, and Luhansk regions.
            </p>

            <h2>6. Record keeping</h2>
            <p>We maintain records of business transactions in compliance with applicable laws:</p>
            <ul>
                <li>Client identification records are retained for 5 years after the business relationship ends.</li>
                <li>Transaction records (invoices, receipts, payment confirmations) are retained for 7 years.</li>
                <li>Service-related communication records are retained for 5 years.</li>
            </ul>
            <p>
                Records are stored securely and made available to competent authorities upon lawful request.
            </p>

            <h2>7. Prohibited activities</h2>
            <p>RomConsult will not:</p>
            <ul>
                <li>Accept cash payments or cryptocurrency.</li>
                <li>Process payments on behalf of third parties.</li>
                <li>Provide services to clients on sanctions lists.</li>
                <li>Engage in transactions with no clear business purpose.</li>
            </ul>

            <h2>8. Compliance responsibility</h2>
            <p>
                Management is responsible for ensuring adherence to this policy. This policy is reviewed annually and updated as needed to reflect changes in
                regulations or business operations.
            </p>

            <h2>9. Contact information</h2>
            <p>
                For compliance inquiries, contact{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>
        </LegalPageShell>
    );
}
