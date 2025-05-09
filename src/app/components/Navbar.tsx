import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import BrandsDropdown from "./BrandsDropdown";

export default async function Navbar() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany();
  const serializedProducts: serializedProduct[] = [];

  products.forEach((product) => {
    const serializedProduct = {
      name: product.name,
      id: product.id,
      brand: product.brand,
      isFeatured: product.isFeatured,
      isTrending: product.isTrending,
      images: product.images,
      price: Number(product.price),
    };
    serializedProducts.push(serializedProduct);
  });

  return (
    <nav className="flex flex-col bg-stone-600 text-white w-full items-center justify-center">
      <ul className="flex gap-4">
        <BrandsDropdown props={serializedProducts} />
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
