"use client";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CldImage } from "next-cloudinary";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartPage() {
  const cart = useContext(CartContext);
  function removeFromCart(itemToRemove: serializedProduct) {
    const currentCart: serializedProduct[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    currentCart.splice(currentCart.indexOf(itemToRemove));

    cart?.setCart(currentCart);
  }
  return (
    <main className="flex flex-col items-center">
      <div className="flex">
        <div className="flex flex-1" />
        <h1 className="text-3xl font-bold p-6 border-b border-neutral-400 mb-12">
          Your bag({cart?.cart.length})
        </h1>
        <div className="flex flex-1" />
      </div>

      <div className="flex flex-col items-center w-full h-full gap-12">
        {cart?.cart.map((cartItem, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-neutral-500 pb-4 w-[25%]"
          >
            <div className="flex justify-end">
              <Icon
                onClick={() => removeFromCart(cartItem)}
                className="hover:scale-110 text-black hover:cursor-pointer "
                icon="system-uicons:cross"
              />
            </div>
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
      <p>Total cost: ${cart?.total}.00</p>
    </main>
  );
}
