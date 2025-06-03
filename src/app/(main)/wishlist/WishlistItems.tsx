"use client";

import Link from "next/link";
import { useContext } from "react";
import CarouselImage from "../components/CarouselImage";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../contexts/WishlistContext";

export default function WishlistItems() {
  const wishlistItems = useContext(WishlistContext);
  const wishlist = wishlistItems?.wishlist;

  return (
    <section className="flex w-full flex-1 flex-col items-center gap-6">
      {wishlist?.length != 0 ? (
        <h1 className="inline-block text-3xl font-bold border-b border-neutral-400 pb-4 text-nowrap self-center">
          Your wishlist items ({wishlist?.length})
        </h1>
      ) : (
        <div className="flex w-full flex-col flex-1 items-center p-20 gap-28">
          <h1 className="heading">Your wishlist is empty</h1>
          <Link
            href="/"
            className="text-white w-sm md:w-md h-[3rem] bg-black flex justify-center items-center font-semibold hover:cursor-pointer hover:bg-black/70 duration-150"
          >
            Browse products
          </Link>
        </div>
      )}
      {wishlist?.length != 0 && (
        <div className="md:w-max mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-max gap-6">
          {wishlist?.map((product) => (
            <div key={product.id} className="flex flex-col gap-4 w-[192px]">
              <ProductCard props={product}>
                <Link href={`/watches/wishlisted/${product.name}`}>
                  <CarouselImage props={product} />
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
