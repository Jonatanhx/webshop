"use client";

import Link from "next/link";
import { useContext } from "react";
import CarouselImages from "../components/CarouselImage";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../contexts/WishlistContext";

export default function WishlistItems() {
  const wishlistItems = useContext(WishlistContext);
  const wishlist = wishlistItems?.wishlist;
  return (
    <section className="flex w-full flex-1 flex-col items-center">
      {wishlist?.length != 0 ? (
        <h1 className="inline-block heading p-6 underline decoration-neutral-400 underline-offset-12">
          Your wishlist items
        </h1>
      ) : (
        <div className="flex w-full flex-col flex-1 items-center p-20 gap-28">
          <h1 className="heading">Your wishlist is empty</h1>
          <Link
            href="/"
            className="text-white w-[25%] h-[3rem] bg-black flex justify-center items-center font-semibold hover:cursor-pointer hover:bg-black/70 duration-150"
          >
            Browse products
          </Link>
        </div>
      )}
      {wishlist?.length != 0 && (
        <div className="flex flex-1 gap-6">
          {wishlist?.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <ProductCard props={product}>
                <Link href={`/watches/mens-watches/${product.name}`}>
                  <CarouselImages props={product} />
                </Link>
              </ProductCard>
              <button className="btn1">
                <p className="text-white">Add to bag</p>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
