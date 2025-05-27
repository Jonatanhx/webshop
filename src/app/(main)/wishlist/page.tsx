import WishlistItems from "./WishlistItems";

export default async function wishlistPage() {
  return (
    <main className="flex flex-col items-center px-48">
      <WishlistItems />
    </main>
  );
}
