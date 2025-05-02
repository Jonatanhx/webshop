import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-stone-300 min-h-12 w-full items-center justify-center">
      <ul className="flex gap-4">
        <li className="flex">
          Brands <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex">
          Pre-owned
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex">
          Mens watches
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex">
          Womens watches
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex">
          Sell your watch
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
      </ul>
    </nav>
  );
}
