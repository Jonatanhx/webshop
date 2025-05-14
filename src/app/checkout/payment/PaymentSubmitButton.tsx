"use client";

import { useRouter } from "next/navigation";

export default function PaymentSubmitButton() {
  const router = useRouter();

  function handleSubmit() {
    router.push("/checkout/confirm");
  }
  return (
    <button
      onClick={handleSubmit}
      className="btn1 w-[33%] absolute bottom-0 right-0"
      type="submit"
    >
      Next
    </button>
  );
}
