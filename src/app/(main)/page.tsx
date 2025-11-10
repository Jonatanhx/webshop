import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../lib/prisma";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default async function HomePage() {
  const mensWatches = serializeProducts(
    await prisma.product.findMany({
      where: {
        productCategory: {
          some: {
            category: {
              name: "mens-watches",
            },
          },
        },
      },
    })
  );

  const womensWatches = serializeProducts(
    await prisma.product.findMany({
      where: {
        productCategory: {
          some: {
            category: {
              name: "womens-watches",
            },
          },
        },
      },
    })
  );

  return (
    <main className="gap-12 pb-12">
      <Hero />
      <div className="flex self-start pl-8 md:pl-24 xl:pl-48">
        <span className="text-xl md:text-3xl font-bold text-nowrap">
          The hottest products for him
        </span>
      </div>
      <Carousel props={mensWatches} />
      <div className="flex self-start pl-8 md:pl-24 xl:pl-48">
        <span className="text-xl md:text-3xl font-bold text-nowrap">
          The finest assortment for her
        </span>
      </div>
      <Carousel props={womensWatches} />
    </main>
  );
}
