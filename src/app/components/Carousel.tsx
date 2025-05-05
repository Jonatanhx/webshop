import { serializedProduct } from "@/types";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import CloudinaryImage from "./CloudinaryImage";

export default async function Carousel() {
  const products = await prisma.product.findMany();

  const serializedProducts: serializedProduct[] = products.map((product) => ({
    name: product.name,
    id: product.id,
    brand: product.brand,
    images: product.images,
    price: Number(product.price),
  }));

  return (
    <ul className="flex items-center justify-center">
      {serializedProducts.map((product) => (
        <Link key={product.id} href={`/mens-watches/${product.name}`}>
          <li className="relative w-[8rem] h-[14rem] overflow-hidden m-4 border">
            <CloudinaryImage props={product} />
          </li>
        </Link>
      ))}
      {/* 
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
      </li> */}
    </ul>
  );
}
