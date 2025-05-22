import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="flex justify-center px-48">
      <aside className="flex flex-col py-8 gap-3">
        <span className="text-2xl font-semibold">Your account</span>

        <Link
          className="no-underline hover:underline hover:underline-offset-8 self-start text-xl"
          href="/profile/overview"
        >
          Overview
        </Link>
        <Link
          className="no-underline hover:underline hover:underline-offset-8 self-start text-xl"
          href="/profile/settings"
        >
          Account settings
        </Link>
        <Link
          className="no-underline hover:underline hover:underline-offset-8 self-start text-xl"
          href="/profile/orderhistory"
        >
          Order history
        </Link>
      </aside>
      <section className="flex flex-1 flex-col p-20">
        <h1 className="heading">My profile</h1>
        <div className="flex flex-col items-center p-20 gap-8">
          <span className="text-neutral-700 text-lg">
            You&apos;re all caught up 🎉
          </span>{" "}
          <button className="btn1 w-[50%]">Continue shopping</button>
        </div>
      </section>
    </main>
  );
}
