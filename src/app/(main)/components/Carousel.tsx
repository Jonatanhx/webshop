"use client";
import Link from "next/link";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import CarouselImages from "./CarouselImage";
import ProductCard from "./ProductCard";

interface CarouselProps {
  props: serializedProduct[];
}

export default function Carousel({ props }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -192, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 192, behavior: "smooth" });
    }
  };

  return (
    <div className="flex">
      <button onClick={scrollLeft} className="hover:scale-110">
        <Icon icon="mdi-light:chevron-left" className="size-9" />
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto py-2 scroll-smooth scrollbar-none max-w-[192px] md:max-w-[576px] lg:max-w-[960px] xl:max-w-[1344px]"
      >
        {props.map((product) => (
          <ProductCard key={product.id} props={product}>
            <Link href={`/watches/mens-watches/${product.name}`}>
              <CarouselImages props={product} />
            </Link>
          </ProductCard>
        ))}
      </div>
      <button onClick={scrollRight} className="hover:scale-110">
        <Icon icon="mdi-light:chevron-right" className="size-9" />
      </button>
    </div>
  );
}
