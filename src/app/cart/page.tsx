"use client";

import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<serializedProduct[]>([]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCart(cartItems);
  }, []);
  return (
    <main className="flex flex-col items-center">
      <div className="flex">
        <div className="flex flex-1" />
        <h1 className="text-3xl font-bold p-6 border-b border-neutral-400 mb-12">
          Your bag({cart.length})
        </h1>
        <div className="flex flex-1" />
      </div>

      <div className="flex flex-col items-center w-full h-full">
        {cart.map((cartItem, index) => (
          <div key={index} className="flex border w-[25%]">
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
            <section>
              <p className="title">{cartItem.brand}</p>
              <p className="subtitle">{cartItem.name}</p>
              <p>{cartItem.price}</p>
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}
