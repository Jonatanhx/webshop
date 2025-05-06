import ProductDisplay from "@/app/components/ProductDisplay";
import { serializedProduct } from "@/types";
import Link from "next/link";
import { prisma } from "../../../../lib/prisma";

export default async function ProductPage(
  props0: {
    params: Promise<{ category: string; slug: string }>;
  }
) {
  const params = await props0.params;
  const product = await prisma.product.findFirstOrThrow({
    where: {
      name: params.slug,
    },
  });
  const serializedProduct: serializedProduct = {
    name: product.name,
    id: product.id,
    brand: product.brand,
    images: product.images,
    price: Number(product.price),
  };
  return (
    <main>
      <div className="flex px-2">
        <Link
          href="/"
          className="border-b border-transparent hover:border-black"
        >
          <p className="capitalize">home</p>
        </Link>

        <div className="flex">
          <p className="px-2">/</p>
          <Link
            href={`/${params.category}`}
            className="border-b border-transparent hover:border-black"
          >
            <p className="capitalize">{params.category.replace("-", " ")}</p>
          </Link>
        </div>
      </div>
      <ProductDisplay props={serializedProduct} />
    </main>
  );
}
