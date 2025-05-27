import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileAside from "./ProfileAside";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main id="profile-main" className="px-48 py-6">
      <ProfileAside />
      <section className="flex h-screen w-full flex-col self-start px-20">
        <h1 className="heading">My profile</h1>
        <div className="flex flex-col items-center gap-8 p-[10rem]">
          <span className="text-neutral-700 text-lg">
            You&apos;re all caught up 🎉
          </span>
          <button className="btn1 w-[50%]">Continue shopping</button>
        </div>
      </section>
    </main>
  );
}
