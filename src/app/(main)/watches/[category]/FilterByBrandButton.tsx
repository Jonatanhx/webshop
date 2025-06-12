"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface FilterByBrandButtonProps {
  props: string[];
}
export default function FilterByBrandButton({
  props,
}: FilterByBrandButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    if (value === "all") {
      params.delete("brand");
    } else {
      params.set("brand", value);
    }
    router.push(`?${params}`);
  }
  return (
    <select onChange={handleChange} className="px-4 border h-[2rem] w-[9rem]">
      <option value={"all"}>All brands</option>
      {props.map((brand, index) => (
        <option key={index} value={brand} className="capitalize">
          {brand.charAt(0).toUpperCase() + brand.slice(1)}
        </option>
      ))}
    </select>
  );
}
