import ProfileAside from "./ProfileAside";

export default function ProfilePage() {
  return (
    <main className="flex justify-center px-48">
      <ProfileAside />
      <section className="flex flex-1 flex-col p-20">
        <h1 className="heading">My profile</h1>
        <div className="flex flex-col items-center gap-8">
          <span className="text-neutral-700 text-lg">
            You&apos;re all caught up 🎉
          </span>{" "}
          <button className="btn1 w-[50%]">Continue shopping</button>
        </div>
      </section>
    </main>
  );
}
