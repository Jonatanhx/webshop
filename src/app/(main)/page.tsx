import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../lib/prisma";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default async function HomePage() {
  const products = serializeProducts(await prisma.product.findMany());
  return (
    <main className="gap-12 pb-12">
      <Hero />
      <Carousel props={products} />
    </main>
  );
}
