import { Icon } from "@iconify/react";
import Link from "next/link";
export default function UserBar() {
  return (
    <div className="flex flex-1 justify-end">
      <Link href="/profile">
        <Icon
          icon="material-symbols-light:person-outline"
          className="size-11"
        />
      </Link>
      <Link href="/wishlist">
        <Icon icon="mdi-light:heart" className="size-10" />
      </Link>

      <Link href="/cart">
        <Icon
          icon="material-symbols-light:shopping-bag-outline"
          className="size-10"
        />
      </Link>
    </div>
  );
}
