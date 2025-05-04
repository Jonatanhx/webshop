"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  props: {
    name: string;
    id: string;
    brand: string;
    images: string[];
    price: number;
  };
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
