"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
export default function UserBar() {
  const wishlist = useContext(WishlistContext);
  const cart = useContext(CartContext);

  let wishlistItemCount = 0;
  let cartItemCount = 0;
  if (wishlist) {
    wishlistItemCount = wishlist?.wishlist.length;
  }
  if (cart) {
    cartItemCount = cart?.cart.length;
  }

  return (
    <div className="flex justify-end">
      <Link href="/wishlist" className="relative">
        {wishlistItemCount > 0 && (
          <div className="absolute top-0 right-0 bg-neutral-700 rounded-3xl text-sm w-4 h-4 flex items-center justify-center">
            <span className="flex flex-1 justify-center items-center text-white">
              {wishlistItemCount}
            </span>
          </div>
        )}
        <Icon icon="mdi-light:heart" className="size-[1.9rem] mt-2" />
      </Link>

      <Link href="/cart" className="relative">
        {cartItemCount > 0 && (
          <div className="absolute top-0 right-0 bg-neutral-700 rounded-3xl text-sm w-4 h-4 flex items-center justify-center">
            <span className="flex flex-1 justify-center items-center text-white">
              {cartItemCount}
            </span>
          </div>
        )}
        <Icon
          icon="material-symbols-light:shopping-bag-outline"
          className="size-[1.9rem]  mt-2"
        />
      </Link>
    </div>
  );
}
