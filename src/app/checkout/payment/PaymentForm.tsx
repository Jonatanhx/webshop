"use client";

import { useState } from "react";

export default function PaymentForm() {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <section className="min-w-[40%] min-h-[45rem] my-4">
      <span className="text-2xl font-bold">Payment method</span>
      <form className="flex flex-col gap-4 my-4">
        <div className="border rounded-xl">
          <div className="flex items-center gap-4 p-4">
            <input
              value="Swish"
              onChange={handleChange}
              className="radio1"
              name="paymentMethod"
              type="radio"
            />
            <label className="text-lg">Swish</label>
          </div>
          {selected === "Swish" && (
            <div className="border-t p-4">
              You will be forwarded to the Swish app to complete your payment.
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center border rounded-xl">
          <div className="flex gap-4 p-4">
            <input
              value="CreditCard"
              onChange={handleChange}
              className="radio1"
              name="paymentMethod"
              type="radio"
            />
            <label className="text-lg">Credit / Debit Card</label>
          </div>
          {selected === "CreditCard" && (
            <div className="flex flex-col gap-4 p-4 border-t">
              <input
                placeholder="Card number"
                className="input-field1 w-full"
              />
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
          <div className="flex items-center gap-4 p-4">
            <input
              value="PayPal"
              onChange={handleChange}
              className="radio1"
              name="paymentMethod"
              type="radio"
            />
            <label className="text-lg">PayPal</label>
          </div>
          {selected === "PayPal" && (
            <div className="border-t p-4">
              {" "}
              You will be forwarded to the PayPal app to complete your payment.
            </div>
          )}
        </div>
        <button className="btn1">Next</button>
      </form>
    </section>
  );
}
