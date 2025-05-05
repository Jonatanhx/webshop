import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/Hero.jpg"
        className="object-cover object-center"
        fill
        alt="hero"
      />
    </div>
  );
}
