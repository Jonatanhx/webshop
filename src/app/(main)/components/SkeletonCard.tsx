export default function SkeletonCard() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <div className="bg-neutral-500 animate-pulse rounded-md h-36 w-[200px]" />
        <div className="bg-neutral-500 animate-pulse rounded-md h-8 w-[180px]" />
        <div className="bg-neutral-500 animate-pulse rounded-md h-4 w-[150px]" />
      </div>
    </div>
  );
}
