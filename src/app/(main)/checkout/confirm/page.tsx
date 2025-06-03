import CheckoutProgressBar from "../CheckoutProgressBar";
import OrderSummary from "./OrderSummary";

export default async function ConfirmPage() {
  return (
    <main id="main-content">
      <h1 className="heading self-start">Order summary</h1>
      <CheckoutProgressBar />
      <OrderSummary />
    </main>
  );
}
