import type { Metadata } from "next";
import { LegalPageShell } from "@/components/marketing/legal/legal-page-shell";

export const metadata: Metadata = {
    title: "Refund Policy — RomConsult",
    description: "Refund terms for RomConsult consulting services and session cancellations.",
};

export default function RefundPolicyPage() {
    return (
        <LegalPageShell
            title="Refund Policy"
            lastUpdated="30 Nov 2025"
            description="This policy outlines when refunds may be issued for RomConsult consulting services."
        >
            <h3>Service-based business</h3>
            <p>
                RomConsult is a service-based business specializing in 1-on-1 consulting delivered via live video calls. This refund policy covers our consulting
                services. Any learning materials are provided as complementary resources to consulting clients and are not sold separately.
            </p>

            <h2>1. Overview</h2>
            <p>
                At RomConsult, we strive to ensure customer satisfaction with all consulting services. This Refund Policy outlines the conditions under which
                refunds may be issued for live consulting sessions.
            </p>

            <h2>2. Consulting services (primary service)</h2>
            <h3>2.1 Cancellation and refunds</h3>
            <ul>
                <li>24+ hours notice: Full refund if cancelled at least 24 hours before the scheduled session.</li>
                <li>Less than 24 hours: No refund for cancellations made less than 24 hours before the session.</li>
                <li>No-show: No refund if you fail to attend the scheduled session.</li>
            </ul>

            <h3>2.2 Session quality issues</h3>
            <p>If you experience issues during your consulting session, we may offer:</p>
            <ul>
                <li>A complimentary replacement session.</li>
                <li>Partial or full refund, at our discretion.</li>
            </ul>
            <p>Issues must be reported within 24 hours of the session.</p>

            <h3>2.3 Technical difficulties</h3>
            <p>
                If technical issues on our end prevent the session from being completed, we offer a full refund or reschedule at no additional cost.
            </p>

            <h2>4. How to request a refund</h2>
            <h3>4.1 Contact us</h3>
            <p>To request a refund, please contact us at:</p>
            <ul>
                <li>
                    Email:{" "}
                    <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                        hello@rumconsult.co
                    </a>
                </li>
                <li>Subject line: &quot;Refund Request - [Order Number]&quot;</li>
            </ul>

            <h3>4.2 Required information</h3>
            <p>Please include:</p>
            <ul>
                <li>Your order number.</li>
                <li>Date of purchase.</li>
                <li>Product or service name.</li>
                <li>Reason for refund request.</li>
                <li>Supporting documentation, if applicable.</li>
            </ul>

            <h3>4.3 Response time</h3>
            <p>We respond to refund requests within 2-3 business days.</p>

            <h2>5. Refund processing</h2>
            <h3>5.1 Approved refunds</h3>
            <ul>
                <li>Refunds are processed through the original payment method.</li>
                <li>Processing time is typically 5-10 business days.</li>
                <li>You receive email confirmation when the refund is processed.</li>
            </ul>

            <h3>5.2 Payment processing</h3>
            <p>
                All refunds are processed through our secure payment processor. The time it takes for the refund to appear in your account depends on your card
                issuer&apos;s policies.
            </p>

            <h3>5.3 Partial refunds</h3>
            <p>In some cases, we may offer a partial refund based on:</p>
            <ul>
                <li>Percentage of service completed.</li>
                <li>Nature of the issue.</li>
                <li>Time elapsed since purchase.</li>
            </ul>

            <h2>6. Non-refundable situations</h2>
            <p>Refunds are not issued in the following cases:</p>
            <ul>
                <li>Failure to attend a consulting session without 24-hour notice.</li>
                <li>Dissatisfaction with a consulting session after completion.</li>
                <li>Technical issues on your end, such as internet, device, or software problems.</li>
                <li>Change of mind after a session is completed.</li>
                <li>Violation of our Terms of Service.</li>
                <li>Bookings made more than 30 days ago.</li>
            </ul>

            <h2>7. Chargebacks</h2>
            <p>
                If you initiate a chargeback or payment dispute, we may provide transaction documentation to your card issuer, revoke access to purchased
                services, and suspend your account. Please contact us before initiating a chargeback so we can resolve the issue directly.
            </p>

            <h2>8. Satisfaction guarantee</h2>
            <p>
                While sales are generally final, we want you to be satisfied. If you have concerns about a service, contact us immediately and we will work with
                you to find a solution. Options may include replacement, credit, or refund on a case-by-case basis.
            </p>

            <h2>9. Rescheduling sessions</h2>
            <ul>
                <li>Contact us at least 24 hours before your scheduled session.</li>
                <li>We will work with you to find a new time that works.</li>
                <li>No fees apply for rescheduling with proper notice.</li>
            </ul>

            <h2>10. Gift purchases</h2>
            <p>Refunds for gift purchases are issued to the original purchaser&apos;s payment method.</p>

            <h2>11. Promotional and discounted items</h2>
            <p>Services purchased during sales or with discount codes are subject to the same policy. Refunds are issued for the amount actually paid.</p>

            <h2>12. Subscription services</h2>
            <p>(If applicable in the future)</p>
            <ul>
                <li>Subscriptions can be cancelled at any time.</li>
                <li>No refunds for partial months.</li>
                <li>Access continues until the end of the current billing period.</li>
            </ul>

            <h2>13. Policy changes</h2>
            <p>We reserve the right to modify this Refund Policy at any time. Changes become effective immediately upon posting on our website.</p>

            <h2>14. Questions</h2>
            <p>
                If you have questions about this Refund Policy, please contact us at{" "}
                <a className="text-brand-secondary underline" href="mailto:hello@rumconsult.co">
                    hello@rumconsult.co
                </a>
                .
            </p>

            <h2>15. Legal rights</h2>
            <p>
                This policy does not affect your statutory rights. Depending on your jurisdiction, you may have additional consumer protection rights.
            </p>
        </LegalPageShell>
    );
}
