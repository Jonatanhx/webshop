"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortByButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const SortByOptions: string[] = [
    "Trending",
    "Lowest Price",
    "Highest Price",
    "Deals",
  ];

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case SortByOptions[0]:
        params.set("select", "isTrending");
        params.delete("dir");
        break;
      case SortByOptions[1]:
        params.set("dir", "asc");
        params.delete("select");
        break;
      case SortByOptions[2]:
        params.set("dir", "desc");
        params.delete("select");
        break;
      case SortByOptions[3]:
        params.set("select", "deals");
        params.delete("dir");
        break;
    }
    router.push(`?${params.toString()}`);
  }
  return (
    <select onChange={handleSelect} className="px-4 border h-[2rem] w-[9rem]">
      {SortByOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
