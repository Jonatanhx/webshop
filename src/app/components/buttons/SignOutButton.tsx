"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  async function signOutUser() {
    await signOut();
  }
  return (
    <button onClick={signOutUser}>
      <p className="text-white bg-neutral-600 hover:bg-neutral-600/70 px-4 hover:cursor-pointer rounded-xl">
        Sign out
      </p>
    </button>
  );
}
