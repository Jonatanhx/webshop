"use client";

import { useRouter } from "next/navigation";

export default function ConfirmSubmitButton() {
  const router = useRouter();
  function handleSubmit() {
    router.push("/checkout/completed");
  }
  return (
    <button onClick={handleSubmit} className="btn1 w-[33%]">
      Confirm
    </button>
  );
}
