"use client";

import { selectedPaymentMethod } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";

export default function PaymentForm() {
  const router = useRouter();

  const { register, handleSubmit, setValue, control } =
    useForm<selectedPaymentMethod>();

  const selectedMethod = useWatch({
    control,
    name: "selectedMethod",
  });

  useEffect(() => {
    const previousInput = sessionStorage.getItem("selectedPaymentMethod");
    if (previousInput) {
      const parsedData = JSON.parse(previousInput);
      setValue("selectedMethod", parsedData.selectedMethod);
    }
  }, []);

  const onSubmit: SubmitHandler<selectedPaymentMethod> = (data) => {
    sessionStorage.setItem("selectedPaymentMethod", JSON.stringify(data));
    router.push("/checkout/confirm");
  };

  return (
    <form
      className="flex flex-col gap-4 my-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border rounded-xl">
        <label className="flex items-center gap-4 p-4 text-lg">
          <input
            value="Swish"
            className="radio1"
            type="radio"
            {...register("selectedMethod", {})}
          />
          Swish
        </label>
        {selectedMethod === "Swish" && (
          <div className="border-t p-4">
            You will be forwarded to the Swish app to complete your payment.
          </div>
        )}
      </div>
      <div className="flex flex-col border rounded-xl">
        <label className="flex gap-4 p-4 text-lg items-center">
          <input
            value="CreditCard"
            className="radio1"
            type="radio"
            {...register("selectedMethod", {})}
          />
          Credit / Debit Card
        </label>
        {selectedMethod === "CreditCard" && (
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
            className="radio1"
            type="radio"
            {...register("selectedMethod", {})}
          />
          PayPal
        </label>
        {selectedMethod === "PayPal" && (
          <div className="border-t p-4">
            You will be forwarded to the PayPal app to complete your payment.
          </div>
        )}
      </div>
      <button className="btn1 w-[33%] absolute bottom-0 right-0" type="submit">
        Next
      </button>
    </form>
  );
}
