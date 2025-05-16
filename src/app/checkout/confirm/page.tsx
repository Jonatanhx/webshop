import CheckoutProgressBar from "../CheckoutProgressBar";
import OrderSummary from "./OrderSummary";

export default async function ConfirmPage() {
  return (
    <main className="flex flex-col py-16 px-32">
      <CheckoutProgressBar />
      <h1 className="heading">Order summary</h1>
      <OrderSummary />
    </main>
  );
}
