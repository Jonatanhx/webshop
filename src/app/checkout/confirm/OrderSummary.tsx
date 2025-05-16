"use client";
import { CartContext } from "@/app/contexts/CartContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useContext } from "react";

export default function OrderSummary() {
  const context = useContext(CartContext);
  return (
    <div className="flex flex-1 w-full">
      <section className="flex flex-1 flex-col p-4 gap-6">
        <h1 className="heading">Order summary</h1>
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
                <div className="relative w-[8rem] h-[10rem]">
                  <CldImage
                    alt={cartItem.name}
                    src={cartItem.images[0]}
                    fill
                    crop="fill"
                    className="object-contain object-center"
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
        <Link href="/checkout/completed" className="btn1 w-[33%]">
          Confirm
        </Link>
      </aside>
    </div>
  );
}
