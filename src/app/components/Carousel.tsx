import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  const watch1 = "citizen-classic";
  return (
    <ul className="flex">
      <Link href={`/product/${watch1}`}>
        <li className="overflow-hidden">
          <Image
            className="max-h-[12rem] h-auto w-auto"
            src="/watch1/CitizenClassic1.png"
            height={500}
            width={400}
            alt="Citizen classic"
          />
        </li>
      </Link>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          src="/watch2/BulovaClipper1.png"
          height={500}
          width={400}
          alt="Bulova clipper"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          src="/watch3/BulovaA15-pilot.png"
          height={500}
          width={400}
          alt="Bulova A15-pilot"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          src="/watch4/BulovaCurv1.png"
          height={500}
          width={400}
          alt="Bulova curv"
        />
      </li>
      <li className="overflow-hidden">
        <Image
          className="max-h-[12rem] h-auto w-auto"
          src="/watch5/CitizenTsuyosa1.png"
          height={500}
          width={400}
          alt="Citizen Tsuyosa"
        />
      </li>
    </ul>
  );
}
