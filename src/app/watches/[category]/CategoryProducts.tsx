import CarouselImages from "@/app/components/CarouselImage";
import ProductCard from "@/app/components/ProductCard";
import { serializedProduct, SortOrder } from "@/types";
import Link from "next/link";
import { prisma } from "../../../../lib/prisma";
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
    <section className="flex justify-center flex-1">
      {serializedProducts.length > 0 ? (
        <ul className="grid grid-cols-6">
          {serializedProducts.map((product) => (
            <ProductCard key={product.id} props={product}>
              <Link href={`/watches/${props.params.category}/${product.name}`}>
                <CarouselImages props={product} />
              </Link>
            </ProductCard>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-32 h-[25rem]">
          <span className="text-xl font-semibold">
            No products could be found for this filter.
          </span>
          <button className="btn1 w-full text-lg">Return to start page</button>
        </div>
      )}
    </section>
  );
}
