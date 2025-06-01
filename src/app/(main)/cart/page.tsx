import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../../lib/prisma";
import Carousel from "../components/Carousel";
import CartItems from "./CartItems";

export default async function CartPage() {
  const products = serializeProducts(await prisma.product.findMany());
  return (
    <main className="flex flex-col items-center pb-12 overflow-hidden">
      <CartItems />
      <span className="w-full flex ml-[35rem] heading">Best deals</span>
      <Carousel props={products} />
    </main>
  );
}
