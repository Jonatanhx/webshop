import CheckoutProgressBar from "../CheckoutProgressBar";
import AddressForm from "./AddressForm";

export default async function AddressPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <section className="flex flex-col my-4">
        <h1 className="heading">Address</h1>
        <AddressForm />
      </section>
    </main>
  );
}
