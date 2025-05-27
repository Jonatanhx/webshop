import Link from "next/link";

import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../../lib/prisma";
import CarouselImages from "./CarouselImage";
import ProductCard from "./ProductCard";

export default async function Carousel() {
  const products = serializeProducts(await prisma.product.findMany());

  return (
    <ul className="flex items-center justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} props={product}>
          <Link href={`/watches/mens-watches/${product.name}`}>
            <CarouselImages props={product} />
          </Link>
        </ProductCard>
      ))}
    </ul>
  );
}
