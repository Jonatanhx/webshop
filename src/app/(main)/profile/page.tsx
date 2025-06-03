import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileAside from "./ProfileAside";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main id="main-content">
      <h1 className="heading w-full py-6">Overview</h1>
      <div className="flex w-full">
        <ProfileAside />
        <section className="flex w-full items-center gap-20 flex-col px-14">
          <span className="text-neutral-700 text-lg">
            You&apos;re all caught up 🎉
          </span>
          <button className="btn1 w-xl">Continue shopping</button>
        </section>
      </div>
    </main>
  );
}
