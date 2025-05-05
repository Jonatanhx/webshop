import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Carousel />
    </main>
  );
}
