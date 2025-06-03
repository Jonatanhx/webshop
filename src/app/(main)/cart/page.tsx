import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../../../../lib/prisma";
import Carousel from "../components/Carousel";
import CartItems from "./CartItems";

export default async function CartPage() {
  const products = serializeProducts(await prisma.product.findMany());
  return (
    <main id="main-content">
      <CartItems />
      <div className="py-4">
        <span className="inline-block heading">Best deals</span>
        <Carousel props={products} />
      </div>
    </main>
  );
}
