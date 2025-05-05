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
        <CldImage
          key={index}
          src={image}
          alt="Citizen classic"
          height={300}
          width={100}
        />
      ))}
    </div>
  );
}
