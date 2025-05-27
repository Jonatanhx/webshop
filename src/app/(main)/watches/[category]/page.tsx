import { SortOrder } from "@/types";
import { prisma } from "../../../../../lib/prisma";
import CategoryProducts from "./CategoryProducts";
import FilterByBrandButton from "./FilterByBrandButton";
import SortByButton from "./SortByButton";

export default async function CategoriesPage(props0: {
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
    <main className="flex flex-col h-full px-36">
      <section className="flex justify-end py-4 gap-4 self-end">
        <SortByButton />
        <FilterByBrandButton props={uniqueBrandsArray} />
      </section>
      <CategoryProducts props={{ params, searchParams }} />
    </main>
  );
}
