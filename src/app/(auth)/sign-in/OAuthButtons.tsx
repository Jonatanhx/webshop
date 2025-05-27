"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function OAuthButtons() {
  async function signInWithGoogle() {
    await signIn("google");
    redirect("/");
  }

  async function signInWithGithub() {
    // await signIn("github");
    redirect("/");
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
