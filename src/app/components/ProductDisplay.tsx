"use client";
import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface ProductDisplayProps {
  props: serializedProduct;
}

export default function ProductDisplay({ props }: ProductDisplayProps) {
  const cart = useContext(CartContext);

  function addToCart() {
    const currentCart: serializedProduct[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    currentCart.push(props);
    cart?.setCart(currentCart);
  }

  return (
    <div className="flex">
      <section className="flex flex-1 justify-end">
        <div>
          {props.images.map((image, index) => (
            <div
              key={index}
              className="relative w-[10rem] h-[12rem] border-2 border-transparent hover:border-black hover:cursor-pointer"
            >
              <CldImage
                src={image}
                alt={props.name}
                fill
                className="object-center object-contain"
                sizes="100%"
              />
            </div>
          ))}
        </div>
        <div className="relative w-[22.5rem] h-[30rem]">
          <CldImage
            src={props.images[0]}
            alt={props.name}
            fill
            sizes="100%"
            className="object-center object-contain"
          />
        </div>
      </section>
      <section className="flex flex-1 justify-between flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl uppercase semi-bold">{props.brand}</h1>
          <h2 className="text-2xl text-neutral-400 capitalize">
            {props.name.replace("-", " ")}
          </h2>
          <p className="text-lg">${props.price}.00</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => addToCart()}
            className="w-[70%] h-[3rem] bg-black flex justify-center items-center font-semibold hover:cursor-pointer hover:bg-black/70 duration-150"
          >
            <p className="text-white">Add to bag</p>
          </button>
          <p className="subtitle">All images licensed under CC BY-NC 4.0</p>
        </div>
      </section>
    </div>
  );
}
