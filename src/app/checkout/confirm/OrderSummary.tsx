"use client";
import { CartContext } from "@/app/contexts/CartContext";
import {
  AddressInputs,
  selectedPaymentMethod,
  serializedProduct,
} from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { createOrder } from "../../../../prisma/createOrder";

export default function OrderSummary() {
  const shippingFee = 25;
  const context = useContext(CartContext);
  const router = useRouter();
  const [address, setAddress] = useState<AddressInputs | undefined>(undefined);
  const [cartItems, setCartItems] = useState<serializedProduct[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<
    selectedPaymentMethod | undefined
  >(undefined);

  useEffect(() => {
    const addressData = sessionStorage.getItem("addressFormData");
    const paymentMethodData = sessionStorage.getItem("selectedPaymentMethod");
    const cartItemsData = localStorage.getItem("cartItems");

    if (addressData) {
      setAddress(JSON.parse(addressData));
    }

    if (paymentMethodData) {
      setPaymentMethod(JSON.parse(paymentMethodData));
    }
    if (cartItemsData) {
      setCartItems(JSON.parse(cartItemsData));
    }
  }, []);

  function handleSubmit() {
    createOrder(cartItems);
    router.push("/checkout/completed");
    sessionStorage.clear();
    context?.setCart([]);
  }

  return (
    <div className="flex flex-1 w-full">
      <section className="flex flex-1 flex-col p-4 gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">Order</span>
          <span>Parcel shipped by Peluche</span>
          <span>Parcel delivered by UPS</span>
          {context?.cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex flex-col border-b bg-neutral-100 border-neutral-500 pb-4 w-[50%]"
            >
              <div className="flex justify-end"></div>
              <div className="flex">
                <div className="relative w-[6rem] h-[10rem] overflow-hidden">
                  <CldImage
                    alt={cartItem.name}
                    src={cartItem.images[0]}
                    width={300}
                    height={200}
                    className="object-cover object-center w-full h-full"
                    sizes="100%"
                  />
                </div>
                <div>
                  <p className="title">{cartItem.brand}</p>
                  <p className="subtitle">{cartItem.name}</p>
                  <p>${cartItem.price}.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="flex flex-1 flex-col gap-5 p-4 bg-neutral-100 relative">
        {address && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="text-lg font-semibold capitalize">
                Delivery adress
              </span>
              <span className="capitalize">{address.address1}</span>
              <span className="capitalize">{address.address2}</span>
              <span>
                {address.postalCode} {address.city}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Billing address</span>
              <span className="capitalize">
                {address.firstName} {address.lastName}
              </span>
              <span className="capitalize">{address.address1}</span>
              <span className="capitalize">
                {address.postalCode} {address.city}
              </span>
              <span className="capitalize">{address.country}</span>
            </div>
          </div>
        )}
        {paymentMethod && (
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Payment method</span>
            <Icon icon="logos:mastercard" className="size-8" />
          </div>
        )}
        <input
          className="border p-3 rounded-xl bg-white max-w-[33%]"
          placeholder="Discount code or gift card"
        />
        <div className="flex flex-col max-w-[33%]">
          <div className="flex flex-col border-b py-4">
            <span className="text-md">Subtotal: ${context?.total}.00</span>
            <span className="text-md">Delivery: ${shippingFee}.00</span>
          </div>
          {context && (
            <span className="text-md font-semibold pt-2">
              Total: ${context.total + shippingFee}.00
            </span>
          )}
          <span className="text-neutral-700 text-sm">
            Including $13.00 in taxes
          </span>
        </div>
        <button onClick={handleSubmit} className="btn1 w-[33%]">
          Confirm
        </button>
      </aside>
    </div>
  );
}
