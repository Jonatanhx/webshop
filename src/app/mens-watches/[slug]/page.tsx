import ProductDisplay from "@/app/components/ProductDisplay";
import URLPath from "@/app/components/URLPath";
import { serializedProduct } from "@/types";
import { prisma } from "../../../../lib/prisma";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
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
    <main className="">
      <URLPath />
      <ProductDisplay props={serializedProduct} />
    </main>
  );
}
