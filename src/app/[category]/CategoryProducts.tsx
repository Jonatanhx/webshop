import { serializedProduct, SortOrder } from "@/types";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import CloudinaryImage from "../components/CloudinaryImage";
import ProductCard from "../components/ProductCard";

interface CategoryProductsProps {
  props: {
    params: {
      category: string;
    };
    searchParams: {
      select?: string;
      dir?: SortOrder;
      brand?: string;
    };
  };
}

export default async function CategoryProducts({
  props,
}: CategoryProductsProps) {
  let order: boolean | undefined = undefined;
  if (props.searchParams.select === "isTrending") {
    order = true;
  }
  const mensWatches = await prisma.product.findMany({
    where: {
      productCategory: {
        some: {
          category: {
            name: props.params.category,
          },
        },
      },
      isTrending: order,
      brand: props.searchParams.brand,
    },
    orderBy: {
      price: props.searchParams?.dir,
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
  return (
    <section>
      <ul className="grid grid-cols-6">
        {serializedProducts.map((product) => (
          <ProductCard key={product.id} props={product}>
            <Link href={`/${props.params.category}/${product.name}`}>
              <CloudinaryImage props={product} />
            </Link>
          </ProductCard>
        ))}
      </ul>
    </section>
  );
}
