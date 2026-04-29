import { redirect } from "next/navigation";

export default function LegacyServiceCheckoutRoute() {
    redirect("/checkout");
}
