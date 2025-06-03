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
    <section className="flex w-full flex-col md:flex-row py-6 px-4 gap-4">
      {/* Desktop */}
      <div className="flex flex-1 justify-end">
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
        <div className="relative h-auto w-[50%] md:w-[16rem]">
          <CldImage
            src={props.images[0]}
            alt={props.name}
            fill
            className="object-center object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-between flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl uppercase semi-bold">{props.brand}</h1>
          <h2 className="text-2xl text-neutral-400 capitalize">
            {props.name.replace("-", " ")}
          </h2>
          <p className="text-lg">${props.price}.00</p>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => addToCart()} className="btn1">
            <p className="text-white">Add to bag</p>
          </button>
          <p className="subtitle">All images licensed under CC BY-NC 4.0</p>
        </div>
      </div>
    </section>
  );
}
