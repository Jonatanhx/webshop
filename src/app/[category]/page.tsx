import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import CloudinaryImage from "../components/CloudinaryImage";
import ProductCard from "../components/ProductCard";

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
    <main className="flex flex-col flex-1 text-white px-36">
      <section className="flex">
        <button className="flex px-3 py-1 border">
          Sort by <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </button>
        <ul>
          {brands.map((brand, index) => (
            <li className="capitalize" key={index}>
              {brand.brand}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul className="grid grid-cols-6">
          {serializedProducts.map((product) => (
            <ProductCard key={product.id} props={product}>
              <Link href={`/mens-watches/${product.name}`}>
                <CloudinaryImage props={product} />
              </Link>
            </ProductCard>
          ))}
        </ul>
      </section>
    </main>
  );
}
