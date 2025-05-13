import CheckoutProgressBar from "../CheckoutProgressBar";

export default async function PaymentPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
    </main>
  );
}
