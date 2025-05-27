import { serializeProducts } from "@/utils/helperFunctions";
import Link from "next/link";
import { prisma } from "../../../../lib/prisma";
import BrandsDropdown from "./BrandsDropdown";
import CategoriesDropdown from "./CategoriesDropdown";

export default async function Navbar() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany();
  const uniqueBrands = await prisma.product.findMany({
    where: {},
    distinct: ["brand"],
    select: { brand: true },
  });
  const uniqueBrandsArray = uniqueBrands.map((obj) => obj.brand);
  const serializedProducts = serializeProducts(products);

  return (
    <nav className="flex flex-col bg-stone-600 text-white w-full items-center justify-center">
      <ul className="flex">
        <BrandsDropdown props={serializedProducts} />
        {categories.map((category) => (
          <Link href={`/watches/${category.name}`} key={category.id}>
            <CategoriesDropdown
              props={{
                category,
                uniqueBrandsArray,
                products: serializedProducts,
              }}
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
}
