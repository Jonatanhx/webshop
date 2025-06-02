import WishlistItems from "./WishlistItems";

export default async function wishlistPage() {
  return (
    <main className="flex flex-col items-center md:px-48 py-4">
      <WishlistItems />
    </main>
  );
}
