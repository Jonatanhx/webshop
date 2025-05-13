"use client";

import Link from "next/link";
import { useContext } from "react";
import CloudinaryImage from "../components/CloudinaryImage";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../contexts/WishlistContext";

export default function WishlistItems() {
  const wishlistItems = useContext(WishlistContext);
  const wishlist = wishlistItems?.wishlist;
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex flex-1" />
        <p className="text-3xl font-bold p-6 border-b border-neutral-400 mb-12">
          Your items
        </p>
        <div className="flex flex-1" />
      </div>
      <div className="flex flex-1 gap-4 min-w-screen justify-center">
        {wishlist ? (
          wishlist.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <ProductCard props={product}>
                <Link href={`/mens-watches/${product.name}`}>
                  <CloudinaryImage props={product} />
                </Link>
              </ProductCard>
              <button className="btn1">
                <p className="text-white">Add to bag</p>
              </button>
            </div>
          ))
        ) : (
          <div>Your wishlist is empty</div>
        )}
      </div>
    </div>
  );
}
