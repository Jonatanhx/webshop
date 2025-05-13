import CheckoutProgressBar from "../CheckoutProgressBar";
import PaymentForm from "./PaymentForm";

export default async function PaymentPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <section className="min-w-[40%] min-h-[35rem] my-4 relative">
        <h1 className="heading">Payment method</h1>
        <PaymentForm />
      </section>
    </main>
  );
}
