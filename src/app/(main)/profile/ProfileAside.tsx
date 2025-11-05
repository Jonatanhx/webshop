import Link from "next/link";

export default function ProfileAside() {
  return (
    <aside className="hidden md:flex flex-col self-start gap-3">
      <h1 className="text-2xl font-semibold text-nowrap">Your account</h1>

      <Link
        className="no-underline hover:underline hover:underline-offset-8 self-start text-xl"
        href="/profile"
      >
        Overview
      </Link>
      <Link
        className="no-underline hover:underline hover:underline-offset-8 self-start text-xl"
        href="/profile/orders"
      >
        Order history
      </Link>
    </aside>
  );
}
