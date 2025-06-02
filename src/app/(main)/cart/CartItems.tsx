"use client";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartTotal from "./CartTotal";

export default function CartItems() {
  const cart = useContext(CartContext);

  function removeFromCart(itemToRemove: serializedProduct) {
    const currentCart: serializedProduct[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    const indexOfItemToRemove = currentCart.findIndex(
      (item) => item.id === itemToRemove.id
    );

    if (indexOfItemToRemove !== -1) {
      currentCart.splice(indexOfItemToRemove, 1);
    }

    cart?.setCart(currentCart);
  }

  return (
    <section className="flex w-full">
      {cart?.cart.length != 0 ? (
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold pb-4 border-b border-neutral-400 mb-12">
              Your bag({cart?.cart.length})
            </h1>
          </div>

          <div className="flex flex-col md:flex-row py-6 justify-around">
            <div className="flex flex-col">
              {cart?.cart.map((cartItem, index) => (
                <div
                  key={index}
                  className="relative flex flex-col border-b bg-neutral-100 border-neutral-500 p-4"
                >
                  <Icon
                    onClick={() => removeFromCart(cartItem)}
                    className="absolute top-0 right-0 hover:scale-110 text-black hover:cursor-pointer size-7"
                    icon="system-uicons:cross"
                  />

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
                    <div className="md:w-[15rem]">
                      <p className="title capitalize">{cartItem.brand}</p>
                      <p className="subtitle capitalize">
                        {cartItem.name.replace("-", " ")}
                      </p>
                      <p>${cartItem.price}.00</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CartTotal total={cart?.total} />
          </div>
        </div>
      ) : (
        <section className="flex flex-col flex-1 items-center p-20 gap-28 w-[50%]">
          <h1 className="heading">Your bag is empty</h1>
          <Link
            href="/"
            className="text-white w-[25%] h-[3rem] bg-black flex justify-center items-center font-semibold hover:cursor-pointer hover:bg-black/70 duration-150"
          >
            Browse products
          </Link>
        </section>
      )}
    </section>
  );
}
