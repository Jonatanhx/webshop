"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  async function signInUser() {
    await signIn("google");
  }
  return (
    <button
      className="text-white bg-neutral-600 hover:bg-neutral-600/70 px-4 py-1 hover:cursor-pointer rounded-xl duration-300"
      onClick={signInUser}
    >
      <span>Sign in</span>
    </button>
  );
}
