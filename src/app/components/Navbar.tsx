import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import BrandsButton from "./buttons/BrandsButton";

export default async function Navbar() {
  const categories = await prisma.category.findMany();
  return (
    <nav className="flex flex-col bg-stone-600 text-white w-full items-center justify-center">
      <ul className="flex gap-4">
        <BrandsButton />
        {categories.map((category) => (
          <Link href={`/${category.name}`} key={category.id}>
            <li className="flex hover:cursor-pointer capitalize font-semibold py-3">
              {category.name.replace("-", " ")}
              <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
