import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-12 pb-12">
      <Hero />
      <Carousel />
    </main>
  );
}
