import AddressForm from "./AddressForm";
import CheckoutProgressBar from "./CheckoutProgressBar";

export default async function checkoutPage() {
  return (
    <main className="flex flex-col items-center py-16">
      <CheckoutProgressBar />
      <AddressForm />
    </main>
  );
}
