"use client";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { NavDropdownContext } from "../contexts/NavDropdownContext";
import NavDropdownWrapper from "./NavDropdownWrapper";

interface BrandsDropdownProps {
  props: serializedProduct[];
}

export default function BrandsDropdown({ props }: BrandsDropdownProps) {
  const context = useContext(NavDropdownContext);
  const params = useParams();
  const trending = props.filter((product) => product.isTrending === true);
  const uniqueBrands: string[] = [];
  props.forEach((product) => {
    if (!uniqueBrands.includes(product.brand)) {
      uniqueBrands.push(product.brand);
    } else {
      return;
    }
  });
  return (
    <li
      className={`relative flex justify-center hover:cursor-pointer font-semibold px-2 py-3 ${
        context?.hoveredItem === "brands" && "underline underline-offset-4"
      }`}
      onMouseOver={() => {
        context?.setIsOpen(true);
        context?.setHoveredItem("brands");
      }}
      onMouseLeave={() => {
        context?.setIsOpen(false);
        context?.setHoveredItem("");
      }}
    >
      Brands
      <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      {context?.hoveredItem === "brands" && (
        <NavDropdownWrapper>
          <div
            onMouseOver={() => {
              context?.setIsOpen(true);
              context?.setHoveredItem("brands");
            }}
            onMouseLeave={() => {
              context?.setIsOpen(false);
              context?.setHoveredItem("");
            }}
            className={`flex absolute duration-300 bg-white w-full gap-32 overflow-hidden ${
              context?.isOpen ? "h-[15rem] border-b-2 py-4 " : "h-0"
            }`}
          >
            <div className="flex flex-1" />
            <div>
              <p className="subtitle">Discover</p>
              <ul>
                <li className="capitalize no-underline hover:underline underline-offset-4">
                  View all
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="subtitle">Trending Watches</p>
              {trending.map((product) => (
                <Link
                  href={`/watches/${params.category}/${product.name}`}
                  className="capitalize no-underline hover:underline underline-offset-4 hover:cursor-pointer"
                  key={product.id}
                >
                  {product.name.replace("-", " ")}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <p className="subtitle">Popular Brands</p>
              {uniqueBrands.map((brand, index) => (
                <Link
                  href={`/watches/${params.category}/?brand=${brand}`}
                  key={index}
                  className="capitalize hover:cursor-pointer no-underline hover:underline underline-offset-4"
                >
                  {brand}
                </Link>
              ))}
            </div>
            <div className="flex flex-1" />
          </div>
        </NavDropdownWrapper>
      )}
    </li>
  );
}
