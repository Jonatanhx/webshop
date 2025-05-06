"use client";

import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryImageProps {
  props: serializedProduct;
}

export default function CloudinaryImage({ props }: CloudinaryImageProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <CldImage
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      alt={props.name}
      src={
        props.images.length > 1
          ? hover
            ? props.images[1]
            : props.images[0]
          : props.images[0]
      }
      fill
      className="object-cover object-center"
      crop="fill"
    />
  );
}
