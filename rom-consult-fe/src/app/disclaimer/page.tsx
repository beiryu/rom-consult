import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "Disclaimer — RomConsult",
    description: "General disclaimer for RomConsult website information and consulting services.",
};

export default function DisclaimerPage() {
    return (
        <LegalPageShell
            title="Disclaimer"
            lastUpdated="30 Nov 2025"
            description="Please read this disclaimer carefully before relying on information shared by RomConsult."
        >
            <h3>Service-based business notice</h3>
            <p>
                RomConsult is a service-based business that provides consulting services. We do not sell digital products as our primary offering. Any materials
                are complementary to live consulting services.
            </p>

            <h2>1. General information</h2>
            <p>
                The information provided by RomConsult is for general informational purposes only. All information on this site is provided in good faith, however
                we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
                completeness of any information on the site.
            </p>

            <h2>2. No professional advice</h2>
            <p>
                The content on our website and in our consulting services is not intended to be a substitute for professional advice. Information provided should
                not be relied upon as legal, financial, business, or other professional advice. Consult appropriate professionals for advice tailored to your
                situation.
            </p>

            <h2>3. Educational consulting services</h2>
            <p>
                Our consulting services are for educational and informational purposes only. While we strive to provide accurate and up-to-date guidance during
                live sessions, we make no guarantees about the results you may achieve by following that guidance.
            </p>

            <h2>4. No guarantees of results</h2>
            <p>
                We do not guarantee any specific results from using our services. Your results may vary based on numerous factors including effort, prior
                knowledge, market conditions, and individual circumstances.
            </p>

            <h2>5. Consulting services disclaimer</h2>
            <p>
                <strong>Service delivery:</strong> All consulting services are delivered through live video calls (Zoom or Google Meet). Sessions are scheduled by
                appointment and conducted in real time.
            </p>
            <p>
                Consulting services may be provided by independent experts. While we vet consultants, we cannot guarantee the quality or outcome of any individual
                consulting session. Guidance is based on experience and knowledge, but results depend on client implementation and circumstances.
            </p>

            <h2>6. Third-party links</h2>
            <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by RomConsult. We have no control over, and
                assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2>7. Technical accuracy</h2>
            <p>
                While we make reasonable efforts to ensure information on our website is correct, we do not warrant its completeness or accuracy. We may make
                changes to website materials at any time without notice.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
                Under no circumstance shall RomConsult have any liability to you for any loss or damage of any kind incurred as a result of using the site or
                relying on any information provided on the site. Your use of the site and reliance on information is solely at your own risk.
            </p>

            <h2>9. Learning materials</h2>
            <p>
                Any learning materials provided as bonuses to consulting clients are offered &quot;as is&quot; without warranty of any kind. These materials are
                complementary to our primary service (live consulting) and are not sold as standalone products.
            </p>

            <h2>10. Testimonials and reviews</h2>
            <p>
                Testimonials or reviews displayed on our website represent individual experiences and do not guarantee that you will achieve the same results.
                Results vary.
            </p>

            <h2>11. Earnings disclaimer</h2>
            <p>
                If any content discusses income or earnings, these examples are not guarantees of earnings. Your results vary and depend on factors including your
                background, experience, and work ethic.
            </p>

            <h2>12. Platform availability</h2>
            <p>
                We strive to keep our website available at all times, but we do not guarantee uninterrupted access. We may suspend, withdraw, or restrict access
                to all or part of the site for business or operational reasons.
            </p>

            <h2>13. Payment processing</h2>
            <p>
                Payments are processed through Stripe, a third-party payment processor. We are not responsible for issues that arise from payment processing,
                although we will try to help resolve problems where possible.
            </p>

            <h2>14. Refund policy</h2>
            <p>
                Please refer to our{" "}
                <Link className="text-brand-secondary underline" href="/refund-policy">
                    Refund Policy
                </Link>{" "}
                for information about refunds and cancellations.
            </p>

            <h2>15. Changes to disclaimer</h2>
            <p>We reserve the right to modify this disclaimer at any time. Changes are effective immediately upon posting on our website.</p>

            <h2>16. Contact information</h2>
            <p>
                If you have any questions about this disclaimer, please contact us at{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>
        </LegalPageShell>
    );
}
