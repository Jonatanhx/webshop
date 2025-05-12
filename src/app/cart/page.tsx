import Carousel from "../components/Carousel";
import CartItems from "./CartItems";

export default async function CartPage() {
  return (
    <main className="flex flex-col items-center pb-12 overflow-hidden">
      <CartItems />
      <p className="w-full flex text-3xl font-bold ml-[35rem]">Best deals</p>
      <Carousel />
    </main>
  );
}
