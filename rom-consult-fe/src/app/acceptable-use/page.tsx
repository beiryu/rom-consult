import type { Metadata } from "next";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "Acceptable Use — RomConsult",
    description: "Acceptable Use Policy for RomConsult website and consulting services.",
};

export default function AcceptableUsePage() {
    return (
        <LegalPageShell
            title="Acceptable Use"
            lastUpdated="17 Nov 2025"
            description="This policy governs your use of RomConsult website and services."
        >
            <h2>1. Introduction</h2>
            <p>
                This Acceptable Use Policy (&quot;Policy&quot;) governs your use of RomConsult website and services. By using our services, you agree to comply
                with this Policy.
            </p>

            <h2>2. Prohibited activities</h2>
            <p>You may not use our services to:</p>
            <h3>2.1 Illegal activities</h3>
            <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Engage in fraudulent activities.</li>
                <li>Infringe intellectual property rights.</li>
                <li>Distribute illegal content.</li>
                <li>Engage in money laundering or terrorist financing.</li>
            </ul>
            <h3>2.2 Harmful activities</h3>
            <ul>
                <li>Distribute malware, viruses, or harmful code.</li>
                <li>Attempt to gain unauthorized access to systems.</li>
                <li>Interfere with or disrupt our services.</li>
                <li>Conduct denial-of-service attacks.</li>
                <li>Attempt to bypass security measures.</li>
            </ul>
            <h3>2.3 Abusive behavior</h3>
            <ul>
                <li>Harass, threaten, or abuse others.</li>
                <li>Post hateful or discriminatory content.</li>
                <li>Impersonate others.</li>
                <li>Spam or send unsolicited communications.</li>
                <li>Engage in deceptive practices.</li>
            </ul>
            <h3>2.4 Commercial misuse</h3>
            <ul>
                <li>Resell our products or services without authorization.</li>
                <li>Use our content for commercial purposes without permission.</li>
                <li>Scrape or harvest data from our website.</li>
                <li>Use automated systems to access our services without approval.</li>
            </ul>

            <h2>3. Content standards</h2>
            <p>Any content you submit or share must:</p>
            <ul>
                <li>Be accurate and not misleading.</li>
                <li>Not violate any third-party rights.</li>
                <li>Not contain offensive or inappropriate material.</li>
                <li>Comply with all applicable laws.</li>
            </ul>

            <h2>4. Payment and financial conduct</h2>
            <p>You agree to:</p>
            <ul>
                <li>Provide accurate payment information.</li>
                <li>Not use stolen or unauthorized payment methods.</li>
                <li>Not engage in chargeback fraud.</li>
                <li>Not attempt to manipulate pricing or discounts.</li>
                <li>Comply with payment processor terms.</li>
            </ul>

            <h2>5. Account responsibilities</h2>
            <p>If you create an account, you must:</p>
            <ul>
                <li>Provide accurate information.</li>
                <li>Keep your credentials secure.</li>
                <li>Not share your account.</li>
                <li>Notify us of unauthorized access.</li>
                <li>Be responsible for all account activity.</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>You must respect our intellectual property rights:</p>
            <ul>
                <li>Do not copy or redistribute our content without permission.</li>
                <li>Do not remove copyright notices.</li>
                <li>Use content only as licensed.</li>
                <li>Do not create derivative works without permission.</li>
            </ul>

            <h2>7. Reporting violations</h2>
            <p>
                If you become aware of any violations of this Policy, please report them to{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>

            <h2>8. Enforcement</h2>
            <p>We reserve the right to:</p>
            <ul>
                <li>Investigate suspected violations.</li>
                <li>Remove content that violates this Policy.</li>
                <li>Suspend or terminate accounts.</li>
                <li>Report illegal activities to authorities.</li>
                <li>Take legal action when necessary.</li>
            </ul>

            <h2>9. Consequences of violation</h2>
            <p>Violations may result in:</p>
            <ul>
                <li>Warning or notice.</li>
                <li>Temporary suspension.</li>
                <li>Permanent account termination.</li>
                <li>Forfeiture of payments.</li>
                <li>Legal action.</li>
                <li>Reporting to law enforcement.</li>
            </ul>

            <h2>10. Cooperation with authorities</h2>
            <p>
                We cooperate with law enforcement and regulatory authorities when required by law or when we believe it is necessary to protect our rights or the
                safety of others.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
                We may update this Policy at any time. Continued use of our services after changes constitutes acceptance of the updated Policy.
            </p>

            <h2>12. Contact us</h2>
            <p>
                Questions about this Policy? Contact us at{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>
        </LegalPageShell>
    );
}
