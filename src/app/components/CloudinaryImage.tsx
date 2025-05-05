"use client";

import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  props: serializedProduct;
}

export default function CloudinaryImage({ props }: CloudinaryImageProps) {
  return (
    <CldImage
      alt={props.name}
      src={props.images[0]}
      fill
      className="object-cover object-center"
      crop="fill"
    />
  );
}
