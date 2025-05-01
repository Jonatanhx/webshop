import Image from "next/image";

export default function Carousel() {
  return (
    <ul className="flex">
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          id="carousel-item"
          src="/watch1/CitizenClassic1.png"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          id="carousel-item"
          src="/watch2/BulovaClipper1.png"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          id="carousel-item"
          src="/watch3/BulovaA15-pilot.png"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          id="carousel-item"
          src="/watch4/BulovaCurv1.png"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          id="carousel-item"
          src="/watch5/CitizenTsuyosa1.png"
          height={500}
          width={400}
          alt="LSKD.CO black mens t-shirt"
        />
      </li>
    </ul>
  );
}
