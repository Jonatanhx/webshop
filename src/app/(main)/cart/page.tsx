import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../../lib/prisma";
import Carousel from "../components/Carousel";
import CartItems from "./CartItems";

export default async function CartPage() {
  const products = serializeProducts(await prisma.product.findMany());
  return (
    <main className="flex flex-col items-center py-6 overflow-hidden gap-6 px-4 md:px-48">
      <CartItems />
      <div className="py-4">
        <span className="inline-block heading">Best deals</span>
        <Carousel props={products} />
      </div>
    </main>
  );
}
