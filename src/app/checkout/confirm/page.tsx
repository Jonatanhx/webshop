import { Icon } from "@iconify/react/dist/iconify.js";
import CheckoutProgressBar from "../CheckoutProgressBar";
import ConfirmSubmitButton from "./ConfirmSubmitButton";

export default async function ConfirmPage() {
  return (
    <main className="flex flex-col items-center py-16 px-32">
      <CheckoutProgressBar />
      <div className="flex flex-1 w-full">
        <section className="flex flex-1 flex-col p-4 gap-6">
          <h1 className="heading">Order summary</h1>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Order</span>
            <span>Parcel shipped by Peluche</span>
            <span>Parcel delivered by UPS</span>
            <span>List of products in cart with images</span>
          </div>
        </section>

        <aside className="flex flex-1 flex-col gap-8 p-4 bg-neutral-100 relative">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Delivery adress</span>
            <span>Sveagatan 1a</span>
            <span>54991 MALMÖ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Billing address</span>
            <span>Jonatan Helander</span>
            <span>Sveagatan 1a</span>
            <span>54991 MALMÖ</span>
            <span>Sweden</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Payment method</span>
            <Icon icon="logos:mastercard" className="size-8" />
          </div>
          <input
            className="border p-3 rounded-xl bg-white max-w-[33%]"
            placeholder="Discount code or gift card"
          />
          <ConfirmSubmitButton />
        </aside>
      </div>
    </main>
  );
}
