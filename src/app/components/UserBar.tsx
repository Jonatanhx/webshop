"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
export default function UserBar() {
  const wishlist = useContext(WishlistContext);
  const cart = useContext(CartContext);

  const wishlistItemCount = wishlist?.wishlist.length;
  const cartItemCount = cart?.cart.length;

  return (
    <div className="flex justify-end">
      <Link href="/wishlist" className="relative">
        <div className="absolute top-0 right-0 bg-amber-400 rounded-3xl text-sm w-4 h-4 flex items-center justify-center">
          <p className="flex flex-1 justify-center items-center">
            {wishlistItemCount}
          </p>
        </div>
        <Icon icon="mdi-light:heart" className="size-8 mt-2" />
      </Link>

      <Link href="/cart" className="relative">
        <div className="absolute top-0 right-0 bg-amber-400 rounded-3xl text-sm w-4 h-4 flex items-center justify-center">
          <p className="flex flex-1 justify-center items-center">
            {cartItemCount}
          </p>
        </div>
        <Icon
          icon="material-symbols-light:shopping-bag-outline"
          className="size-8  mt-2"
        />
      </Link>
    </div>
  );
}
