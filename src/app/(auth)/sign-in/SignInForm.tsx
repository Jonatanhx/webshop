"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignInForm() {
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 min-w-[30%]">
      <input
        className="input-field1"
        placeholder="Email address"
        type="email"
      />
      <button className="btn1" type="submit">
        Continue
      </button>
    </form>
  );
}
