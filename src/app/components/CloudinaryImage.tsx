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
    <div>
      {props.images.length > 1 ? (
        <div>
          <CldImage
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            alt={props.name}
            src={props.images[0]}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
            crop="fill"
          />
          <CldImage
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            alt={props.name}
            src={props.images[1]}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
            crop="fill"
          />
        </div>
      ) : (
        <div>
          <CldImage
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            alt={props.name}
            src={props.images[0]}
            fill
            className={`object-cover object-center transition duration-300 ease-in-out ${
              props.images.length == 1 ? "hover:scale-105" : ""
            }`}
            crop="fill"
          />
        </div>
      )}
    </div>
  );
}
