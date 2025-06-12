import { SortOrder } from "@/types";
import { serializeProducts } from "@/utils/helperFunctions";
import Link from "next/link";
import { prisma } from "../../../../../lib/prisma";
import CarouselImage from "../../components/CarouselImage";
import ProductCard from "../../components/ProductCard";

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

  const mensWatches = serializeProducts(
    await prisma.product.findMany({
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
    })
  );

  return (
    <section className="flex justify-center flex-1 md:py-8 w-full">
      {mensWatches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-4 auto-rows-max">
          {mensWatches.map((product) => (
            <ProductCard key={product.id} props={product}>
              <Link
                href={`/watches/${props.params.category || "brands"}/${
                  product.name
                }`}
              >
                <CarouselImage props={product} />
              </Link>
            </ProductCard>
          ))}
        </div>
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
