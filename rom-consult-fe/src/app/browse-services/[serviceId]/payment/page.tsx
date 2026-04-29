import { redirect } from "next/navigation";

export default function LegacyServicePaymentRoute() {
    redirect("/checkout/payment");
}
