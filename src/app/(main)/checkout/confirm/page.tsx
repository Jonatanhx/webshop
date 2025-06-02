import CheckoutProgressBar from "../CheckoutProgressBar";
import OrderSummary from "./OrderSummary";

export default async function ConfirmPage() {
  return (
    <main className="flex flex-col p-4 md:px-48">
      <CheckoutProgressBar />
      <div className="flex flex-col py-4 w-full">
        <h1 className="heading self-start">Order summary</h1>
        <OrderSummary />
      </div>
    </main>
  );
}
