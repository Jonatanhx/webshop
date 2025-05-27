import Link from "next/link";

export default function ProfileAside() {
  return (
    <aside className="flex flex-col self-start gap-3">
      <span className="text-2xl font-semibold text-nowrap">Your account</span>

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
        href="/profile/orders"
      >
        Order history
      </Link>
    </aside>
  );
}
