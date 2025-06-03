import ProductDisplay from "@/app/(main)/components/ProductDisplay";
import URLPath from "@/app/(main)/components/URLPath";
import { serializedProduct } from "@/types";
import { prisma } from "../../../../../../lib/prisma";

export default async function ProductPage(props0: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const params = await props0.params;
  const product = await prisma.product.findFirstOrThrow({
    where: {
      name: params.slug,
    },
  });
  const serializedProduct: serializedProduct = {
    name: product.name,
    id: product.id,
    isFeatured: product.isFeatured,
    isTrending: product.isTrending,
    brand: product.brand,
    images: product.images,
    price: Number(product.price),
  };
  return (
    <main id="main-content">
      <URLPath />
      <ProductDisplay props={serializedProduct} />
    </main>
  );
}
