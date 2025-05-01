import Image from "next/image";

export default function Carousel() {
  return (
    <ul className="flex">
      <li className="overflow-hidden">
        <Image
          className="max-h-[20rem] h-auto w-auto scale-120"
          id="carousel-item"
          src="/products/tshirt2.jpg"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        ></Image>
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[20rem] h-auto w-auto scale-120"
          id="carousel-item"
          src="/products/tshirt3.jpg"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        ></Image>
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[20rem] h-auto w-auto scale-130"
          src="/products/tshirt1.jpg"
          height={500}
          width={400}
          alt="705 black unisex t-shirt"
        ></Image>
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[20rem] h-auto w-auto scale-130"
          id="carousel-item"
          src="/products/tshirt4.jpg"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        ></Image>
      </li>
    </ul>
  );
}
