"use client";
import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

interface ProductCardProps {
  children: React.ReactNode;
  props: serializedProduct;
}

export default function ProductCard({ children, props }: ProductCardProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <li className="relative z-0">
      <Icon
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        icon="mdi-light:heart"
        className={`size-8 absolute right-0 z-10 ${
          hover
            ? "hover:text-red-500 hover:scale-120 transition duration-150 ease-in-out"
            : ""
        }`}
      />
      {children}
      <h2 className="title uppercase pt-4 pb-2">{props.brand}</h2>
      <p className="subtitle capitalize">{props.name.replace("-", " ")}</p>
      <p>${props.price}.00</p>
    </li>
  );
}
