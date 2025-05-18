"use client";

interface FilterByBrandButtonProps {
  props: {
    brand: string;
  }[];
}
export default function FilterByBrandButton({
  props,
}: FilterByBrandButtonProps) {
  return (
    <select className="px-4 border h-[2rem] w-[9rem]">
      <option>All brands</option>
      {props.map((brand, index) => (
        <option value={index} className="capitalize" key={index}>
          {brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}
        </option>
      ))}
    </select>
  );
}
