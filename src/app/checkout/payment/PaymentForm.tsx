"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentForm() {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <form className="flex flex-col gap-4 my-4">
      <div className="border rounded-xl">
        <label className="flex items-center gap-4 p-4 text-lg">
          <input
            value="Swish"
            onChange={handleChange}
            className="radio1"
            name="paymentMethod"
            type="radio"
          />
          Swish
        </label>
        {selected === "Swish" && (
          <div className="border-t p-4">
            You will be forwarded to the Swish app to complete your payment.
          </div>
        )}
      </div>
      <div className="flex flex-col border rounded-xl">
        <label className="flex gap-4 p-4 text-lg items-center">
          <input
            value="CreditCard"
            onChange={handleChange}
            className="radio1"
            name="paymentMethod"
            type="radio"
          />
          Credit / Debit Card
        </label>
        {selected === "CreditCard" && (
          <div className="flex flex-col gap-4 p-4 border-t">
            <input placeholder="Card number" className="input-field1 w-full" />
            <div className="flex gap-2">
              <input
                placeholder="Expiration date (MM / YY)"
                className="input-field1 flex-1"
              />
              <input
                placeholder="Security code"
                className="input-field1 flex-1"
              />
            </div>
            <input placeholder="Name on card" className="input-field1" />
          </div>
        )}
      </div>
      <div className="border rounded-xl">
        <label className="flex items-center gap-4 p-4 text-lg">
          <input
            value="PayPal"
            onChange={handleChange}
            className="radio1"
            name="paymentMethod"
            type="radio"
          />
          PayPal
        </label>
        {selected === "PayPal" && (
          <div className="border-t p-4">
            You will be forwarded to the PayPal app to complete your payment.
          </div>
        )}
      </div>
      <Link href="/checkout/confirm">
        <button className="btn1 w-[33%] absolute bottom-0 right-0">Next</button>
      </Link>
    </form>
  );
}
