"use client";
import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";

interface ProductDisplayProps {
  props: serializedProduct;
}

export default function ProductDisplay({ props }: ProductDisplayProps) {
  return (
    <div className="flex justify-center">
      {props.images.map((image, index) => (
        <div key={index} className=" relative w-[15rem] h-[20rem]">
          <CldImage
            src={image}
            alt={props.name}
            fill
            className="object-center object-contain"
          />
        </div>
      ))}
    </div>
  );
}
