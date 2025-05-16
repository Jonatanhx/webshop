import CheckoutProgressBar from "../CheckoutProgressBar";
import OrderSummary from "./OrderSummary";

export default async function ConfirmPage() {
  return (
    <main className="flex flex-col items-center py-16 px-32">
      <CheckoutProgressBar />
      <OrderSummary />
    </main>
  );
}
