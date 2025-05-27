"use client";
import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";

interface ProductCardProps {
  children: React.ReactNode;
  props: serializedProduct;
}

export default function ProductCard({ children, props }: ProductCardProps) {
  const wishlist = useContext(WishlistContext);
  function toggleIsWishlisted() {
    const currentWishlist: serializedProduct[] = JSON.parse(
      localStorage.getItem("wishlistItems") || "[]"
    );
    if (!currentWishlist.some((wishlistItem) => wishlistItem.id === props.id)) {
      currentWishlist.push(props);
      wishlist?.setWishlist(currentWishlist);
    } else {
      currentWishlist.splice(currentWishlist.indexOf(props));
      wishlist?.setWishlist(currentWishlist);
    }
  }

  return (
    <li className="relative z-0">
      <div className="flex flex-1 justify-end">
        <Icon
          onClick={() => toggleIsWishlisted()}
          icon={`${
            !wishlist?.wishlist.some(
              (wishlistItem) => wishlistItem.id === props.id
            )
              ? "mdi-light:heart"
              : "system-uicons:cross"
          }`}
          className="size-6 right-0 z-10 my-4 mr-4 text-neutral-500 hover:text-black transition duration-150 ease-in-out hover:cursor-pointer"
        />
      </div>
      {children}
      <h2 className="title uppercase pt-4 pb-2">{props.brand}</h2>
      <p className="subtitle capitalize">{props.name.replace("-", " ")}</p>
      <p>${props.price}.00</p>
    </li>
  );
}
