import { serializedProduct } from "@/types";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import CloudinaryImage from "../components/CloudinaryImage";
import ProductCard from "../components/ProductCard";
import FilterByBrandButton from "./FilterByBrandButton";
import SortByButton from "./SortByButton";

export default async function CategoriesPage(props0: {
  params: Promise<{ category: string }>;
}) {
  const params = await props0.params;
  const mensWatches = await prisma.product.findMany({
    where: {
      productCategory: {
        some: {
          category: {
            name: params.category,
          },
        },
      },
    },
    orderBy: {
      price: "desc",
    },
  });

  const serializedProducts: serializedProduct[] = mensWatches.map(
    (product) => ({
      name: product.name,
      id: product.id,
      brand: product.brand,
      isFeatured: product.isFeatured,
      isTrending: product.isTrending,
      images: product.images,
      price: Number(product.price),
    })
  );

  const brands = await prisma.product.findMany({
    where: {},
    distinct: ["brand"],
    select: { brand: true },
  });
  return (
    <main className="flex flex-col flex-1 px-36">
      <section className="flex justify-end py-4 gap-4">
        <SortByButton />
        <FilterByBrandButton props={brands} />
      </section>
      <section>
        <ul className="grid grid-cols-6">
          {serializedProducts.map((product) => (
            <ProductCard key={product.id} props={product}>
              <Link href={`/${params.category}/${product.name}`}>
                <CloudinaryImage props={product} />
              </Link>
            </ProductCard>
          ))}
        </ul>
      </section>
    </main>
  );
}
