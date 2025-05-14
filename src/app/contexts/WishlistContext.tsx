"use client";
import { serializedProduct } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface WishlistContextProps {
  wishlist: serializedProduct[];
  setWishlist: Dispatch<SetStateAction<serializedProduct[]>>;
}

export const WishlistContext = createContext<WishlistContextProps | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<serializedProduct[]>([]);

  useEffect(() => {
    const currentWishlist = localStorage.getItem("wishlistItems");

    if (currentWishlist) {
      try {
        const parsedWishlist = JSON.parse(currentWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error("Failed to parse wishlist from local storage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
