import CheckoutProgressBar from "../CheckoutProgressBar";

export default async function ConfirmPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <section className="min-w-[40%] min-h-[35rem] my-4 relative">
        <h1>Order summary</h1>
      </section>
    </main>
  );
}
