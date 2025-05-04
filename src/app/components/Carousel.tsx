"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Carousel() {
  const watch1 = "citizen-classic";
  return (
    <ul className="flex items-center justify-center">
      <Link href={`/product/${watch1}`}>
        <li className="relative w-[8rem] h-[14rem] overflow-hidden m-4 border">
          <CldImage
            alt="citizen classic"
            src="CitizenClassic1_gdwm7e"
            fill
            className="object-cover object-center"
            crop="fill"
          />
        </li>
      </Link>
      <li className="relative w-[8rem] h-[14rem] overflow-hidden">
        <CldImage
          alt="citizen classic"
          src="BulovaClipper1_uvpulw"
          fill
          className="object-cover object-center"
          crop="fill"
        />
      </li>
      <li className="relative w-[8rem] h-[14rem] overflow-hidden">
        <CldImage
          alt="citizen classic"
          src="BulovaA15-pilot_wucryl"
          fill
          className="object-cover object-center"
          crop="fill"
        />
      </li>
      <li className="relative w-[8rem] h-[14rem] overflow-hidden">
        <CldImage
          alt="citizen classic"
          src="BulovaCurv1_jcdngs"
          fill
          className="object-cover object-center"
          crop="fill"
        />
      </li>
      <li className="relative w-[8rem] h-[14rem] overflow-hidden">
        <CldImage
          alt="citizen classic"
          src="CitizenTsuyosa1_liym5t"
          fill
          className="object-cover object-center"
          crop="fill"
        />
      </li>
    </ul>
  );
}
