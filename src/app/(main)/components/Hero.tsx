import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[75vh]">
      <Image
        src="/Hero.jpg"
        className="object-cover object-center"
        fill
        alt="hero"
        priority
      />
    </div>
  );
}
