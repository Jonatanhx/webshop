"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  async function signOutUser() {
    await signOut();
  }
  return (
    <button
      onClick={signOutUser}
      className="max-h-[2rem] bg-neutral-600 hover:bg-neutral-600/70 px-4 py-1 hover:cursor-pointer rounded-xl duration-300 mx-2"
    >
      <span className="text-white">Sign out</span>
    </button>
  );
}
