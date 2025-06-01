import { SortOrder } from "@/types";
import { prisma } from "../../../../lib/prisma";
import CategoryProducts from "./[category]/CategoryProducts";
import FilterByBrandButton from "./[category]/FilterByBrandButton";
import SortByButton from "./[category]/SortByButton";

export default async function WatchesPage(props0: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ select?: string; dir?: SortOrder; brand?: string }>;
}) {
  const params = await props0.params;
  const searchParams = await props0.searchParams;

  const uniqueBrands = await prisma.product.findMany({
    where: {},
    distinct: ["brand"],
    select: { brand: true },
  });

  const uniqueBrandsArray = uniqueBrands.map((obj) => obj.brand);

  return (
    <main className="flex flex-col flex-1 px-36 py-6">
      <section className="flex justify-end gap-4 self-end">
        <SortByButton />
        <FilterByBrandButton props={uniqueBrandsArray} />
      </section>
      <CategoryProducts props={{ params, searchParams }} />
    </main>
  );
}
