import type { Metadata } from "next";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "Privacy Policy — RomConsult",
    description: "How RomConsult collects, uses, discloses, and protects your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPageShell
            title="Privacy Policy"
            lastUpdated="17 Nov 2025"
            description="This policy explains how RomConsult collects, uses, discloses, and safeguards your information when you use our website and services."
        >
            <h2>1. Introduction</h2>
            <p>
                RomConsult (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2>2. Information we collect</h2>
            <h3>2.1 Personal information</h3>
            <p>We collect personal information that you voluntarily provide when you:</p>
            <ul>
                <li>Make a purchase.</li>
                <li>Book a consulting session.</li>
                <li>Contact us.</li>
                <li>Apply to become an expert.</li>
            </ul>
            <p>This information may include:</p>
            <ul>
                <li>Name.</li>
                <li>Email address.</li>
                <li>Phone number.</li>
                <li>Billing address.</li>
                <li>Payment information (processed securely by Stripe).</li>
            </ul>

            <h3>2.2 Automatically collected information</h3>
            <p>When you visit our website, we automatically collect certain information about your device, including:</p>
            <ul>
                <li>IP address.</li>
                <li>Browser type.</li>
                <li>Operating system.</li>
                <li>Access times.</li>
                <li>Pages viewed.</li>
                <li>Referring website addresses.</li>
            </ul>

            <h3>2.3 Cookies and tracking technologies</h3>
            <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>3. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Process your orders and deliver products or services.</li>
                <li>Send order confirmations and receipts.</li>
                <li>Schedule and conduct consulting sessions.</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Send administrative information.</li>
                <li>Process expert applications.</li>
                <li>Improve our website and services.</li>
                <li>Prevent fraudulent transactions.</li>
                <li>Comply with legal obligations.</li>
                <li>Generate analytics and reports.</li>
            </ul>

            <h2>4. Payment processing</h2>
            <p>
                All payment information is processed securely through Stripe, our third-party payment processor. We do not store or have access to your complete
                credit card information. Stripe&apos;s privacy policy can be found at{" "}
                <a className="text-brand-secondary underline" href="https://stripe.com/privacy">
                    https://stripe.com/privacy
                </a>
                .
            </p>

            <h2>5. Information sharing and disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <h3>5.1 Service providers</h3>
            <ul>
                <li>Stripe, for payment processing.</li>
                <li>Email service providers, for sending order confirmations and service communication.</li>
                <li>Accounting providers, for tax reporting and compliance.</li>
            </ul>
            <h3>5.2 Legal requirements</h3>
            <p>
                We may disclose your information if required by law or in response to valid requests by public authorities.
            </p>
            <h3>5.3 Business transfers</h3>
            <p>If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred.</p>

            <h2>6. Data retention</h2>
            <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations,
                resolve disputes, and enforce our agreements.
            </p>

            <h2>7. Data security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
            <ul>
                <li>SSL or TLS encryption for data transmission.</li>
                <li>Secure servers and databases.</li>
                <li>Regular security assessments.</li>
                <li>Limited access to personal information.</li>
                <li>Password protection.</li>
            </ul>
            <p>
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>8. Your rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <h3>8.1 Access</h3>
            <p>You have the right to request access to the personal information we hold about you.</p>
            <h3>8.2 Correction</h3>
            <p>You have the right to request correction of inaccurate personal information.</p>
            <h3>8.3 Deletion</h3>
            <p>You have the right to request deletion of your personal information, subject to legal obligations.</p>
            <h3>8.4 Objection</h3>
            <p>You have the right to object to processing of your personal information.</p>
            <h3>8.5 Data portability</h3>
            <p>You have the right to request a copy of your data in a structured, commonly used format.</p>
            <h3>8.6 Opt-out</h3>
            <p>You may opt out of marketing communications at any time by contacting us.</p>

            <h2>9. Children&apos;s privacy</h2>
            <p>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware
                that a child has provided us with personal information, please contact us.
            </p>

            <h2>10. Third-party links</h2>
            <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to
                review their privacy policies.
            </p>

            <h2>11. California privacy rights</h2>
            <p>
                California residents may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal
                information is collected and the right to opt out of the sale of personal information. We do not sell personal information.
            </p>

            <h2>12. GDPR compliance</h2>
            <p>For users in the European Economic Area (EEA), we process personal data in accordance with GDPR requirements, including:</p>
            <ul>
                <li>Contract performance, to fulfill orders and services.</li>
                <li>Legal obligation, including tax and compliance requirements.</li>
                <li>Legitimate interests, such as website and service improvement.</li>
                <li>Consent, where required for marketing communications.</li>
            </ul>

            <h2>13. International data transfers</h2>
            <p>
                Your information may be transferred to and maintained on servers located outside your state, province, country, or other governmental jurisdiction
                where data protection laws may differ.
            </p>

            <h2>14. Changes to this privacy policy</h2>
            <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating
                the &quot;Last Updated&quot; date.
            </p>

            <h2>15. Contact us</h2>
            <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>

            <h2>16. Consent</h2>
            <p>By using our website, you consent to this Privacy Policy and agree to its terms.</p>
        </LegalPageShell>
    );
}
