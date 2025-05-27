"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { checkoutProgressBarContext } from "../contexts/CheckoutProgressBarContext";

export default function CheckoutProgressBar() {
  const context = useContext(checkoutProgressBarContext);
  const path = usePathname().replace("/checkout/", "");

  useEffect(() => {
    switch (path) {
      case "address":
        context?.setStep(2);
        break;
      case "payment":
        context?.setStep(3);
        break;
      case "confirm":
        context?.setStep(4);
        break;
      case "completed":
        context?.setStep(5);
        break;
    }
  }, []);

  if (context === undefined) {
    return;
  } else {
    return (
      <ol id="checkout-progress-bar">
        <li
          className={`progress-step ${
            context.step >= 1 ? "text-neutral-400" : ""
          }`}
        >
          <span className="absolute border-t translate-x-10 translate-y-5 w-full" />
          <span className="progress-circle">1</span>

          <span className="progress-label">Sign in</span>
        </li>

        <li
          className={`progress-step ${context.step != 2 && "text-neutral-400"}`}
        >
          <span
            className={`absolute border-t ${
              context.step > 2 ? "border-solid" : "border-dotted"
            } translate-x-10 translate-y-5 w-full`}
          />
          {context.step > 2 ? (
            <Link href="/checkout/address" className={`group`}>
              <span className="progress-circle hover:text-black">
                <span className="text-neutral-500">2</span>
              </span>
            </Link>
          ) : (
            <span className="progress-circle">2</span>
          )}
          <span className="progress-label">Address</span>
        </li>
        <li
          className={`progress-step ${context.step != 3 && "text-neutral-400"}`}
        >
          <span
            className={`absolute border-t ${
              context.step > 3 ? "border-solid" : "border-dotted"
            } translate-x-10 translate-y-5 w-full`}
          />
          {context.step > 3 ? (
            <Link href="/checkout/payment">
              <span className="progress-circle hover:text-black">
                <span className="text-neutral-500">3</span>
              </span>
            </Link>
          ) : (
            <span className="progress-circle">3</span>
          )}
          <span className="progress-label">Payment</span>
        </li>
        <li
          className={`progress-step ${context.step != 4 && "text-neutral-400"}`}
        >
          <span
            className={`absolute border-t ${
              context.step > 4 ? "border-solid" : "border-dotted"
            } translate-x-10 translate-y-5 w-full`}
          />
          {context.step > 4 ? (
            <Link href="/checkout/confirm">
              <span className="progress-circle hover:text-black">
                <span className="text-neutral-500">4</span>
              </span>
            </Link>
          ) : (
            <span className="progress-circle">4</span>
          )}

          <span className="progress-label">Confirm</span>
        </li>
        <li
          className={`progress-step ${context.step != 5 && "text-neutral-400"}`}
        >
          <span className="progress-circle">5</span>
          <span className="progress-label">Done!</span>
        </li>
      </ol>
    );
  }
}
