export default function SortByButton() {
  const SortByOptions: string[] = [
    "Most Popular",
    "Lowest Price",
    "Highest Price",
    "Deals",
  ];

  return (
    <select className="px-4 border h-[2rem] w-[9rem]">
      {SortByOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
