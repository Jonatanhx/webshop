"use client";
import { useRouter } from "next/navigation";

export default function AddressSubmitButton() {
  const router = useRouter();

  function handleSubmit() {
    router.push("/checkout/payment");
  }
  return (
    <button onClick={handleSubmit} className="btn1 w-full" type="submit">
      Save
    </button>
  );
}
