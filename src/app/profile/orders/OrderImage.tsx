"use client";
import { CldImage } from "next-cloudinary";
interface OrderImageProps {
  props: {
    image: string;
    name: string;
  };
}

export default function OrderImage({ props }: OrderImageProps) {
  return (
    <CldImage
      src={props.image}
      alt={props.name}
      className="object-contain object-center"
      fill
      crop="fill"
      sizes="100%"
    />
  );
}
