import CheckoutProgressBar from "../CheckoutProgressBar";
import AddressForm from "./AddressForm";

export default async function AddressPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <section className="flex flex-col">
        <span className="text-2xl font-bold">Address</span>
        <AddressForm />
      </section>
    </main>
  );
}
