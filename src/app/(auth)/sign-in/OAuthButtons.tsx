"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signIn } from "next-auth/react";

export default function OAuthButtons() {
  async function signInWithGoogle() {
    await signIn("google", { redirectTo: "/" });
  }

  async function signInWithGithub() {
    await signIn("github", { redirectTo: "/" });
  }

  return (
    <div className="flex flex-col gap-4 min-w-[30%]">
      <button onClick={signInWithGoogle} className="oauthbtn">
        <Icon icon="logos:google-icon" className="size-6" /> Continue with
        Google
      </button>
      <button onClick={signInWithGithub} className="oauthbtn">
        <Icon icon="mdi:github" className="size-8" />
        Continue with Github
      </button>
    </div>
  );
}
