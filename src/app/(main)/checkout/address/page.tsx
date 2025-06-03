import CheckoutProgressBar from "../CheckoutProgressBar";
import AddressForm from "./AddressForm";

export default async function AddressPage() {
  return (
    <main id="main-content">
      <CheckoutProgressBar />
      <section className="flex flex-col my-4">
        <h1 className="heading">Address</h1>
        <AddressForm />
      </section>
    </main>
  );
}
