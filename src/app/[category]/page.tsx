import { Icon } from "@iconify/react/dist/iconify.js";
import { prisma } from "../../../lib/prisma";

export default async function MensWatchesPage() {
  const brands = await prisma.product.findMany({
    where: {},
    distinct: ["brand"],
    select: { brand: true },
  });
  return (
    <main className="flex flex-col flex-1 bg-neutral-500 text-white">
      <section className="flex">
        <button className="flex px-3 py-1 border">
          Sort by <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </button>
        <ul>
          {brands.map((brand, index) => (
            <li className="capitalize" key={index}>
              {brand.brand}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
