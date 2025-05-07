"use client";

import { serializedProduct } from "@/types";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<serializedProduct[]>([]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCart(cartItems);
  }, []);
  return (
    <main>
      <button>get ls</button>
      <div>
        {cart.map((cartItem, index) => (
          <p key={index}>{cartItem.name}</p>
        ))}
      </div>
    </main>
  );
}
