"use client";

import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface CarouselImageProps {
  props: serializedProduct;
}

export default function CarouselImage({ props }: CarouselImageProps) {
  const [hover, setHover] = useState<boolean>(false);

  if (props.images.length > 1) {
    return (
      <div className="relative h-[320px] w-[192px]">
        <CldImage
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          alt={props.name}
          src={props.images[0]}
          fill
          className={`absolute object-cover object-center transition-opacity duration-500 ${
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
          className={`absolute object-cover object-center transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
          crop="fill"
        />
      </div>
    );
  } else {
    return (
      <div className="relative h-[20rem] w-[12rem]">
        <CldImage
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          alt={props.name}
          src={props.images[0]}
          className={`object-cover object-center transition duration-300 ease-in-out ${
            props.images.length == 1 ? "hover:scale-105" : ""
          }`}
          fill
          crop="fill"
        />
      </div>
    );
  }
}
