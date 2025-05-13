import CheckoutProgressBar from "../CheckoutProgressBar";
import PaymentForm from "./PaymentForm";

export default async function PaymentPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <PaymentForm />
    </main>
  );
}
