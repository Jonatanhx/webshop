import { serializedProduct } from "@/types";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import BrandsDropdown from "./BrandsDropdown";
import CategoriesDropdown from "./CategoriesDropdown";

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
      <ul className="flex">
        <BrandsDropdown props={serializedProducts} />
        {categories.map((category) => (
          <Link href={`/watches/${category.name}`} key={category.id}>
            <CategoriesDropdown props={category} />
          </Link>
        ))}
      </ul>
    </nav>
  );
}
