import { serializedProduct } from "@/types";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import CloudinaryImage from "./CloudinaryImage";
import ProductCard from "./ProductCard";

export default async function Carousel() {
  const products = await prisma.product.findMany();

  const serializedProducts: serializedProduct[] = products.map((product) => ({
    name: product.name,
    id: product.id,
    brand: product.brand,
    images: product.images,
    price: Number(product.price),
  }));

  return (
    <ul className="flex items-center justify-center my-10 gap-4">
      {serializedProducts.map((product) => (
        <ProductCard key={product.id} props={product}>
          <Link href={`/mens-watches/${product.name}`}>
            <CloudinaryImage props={product} />
          </Link>
        </ProductCard>
      ))}
    </ul>
  );
}
