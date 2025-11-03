"use client";

import { serializedProduct } from "@/types";
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
  const uniqueBrands: string[] = [];

  props.forEach((product) => {
    if (!uniqueBrands.includes(product.brand)) {
      uniqueBrands.push(product.brand);
    } else {
      return;
    }
  });
  return (
    <Link href="/watches">
      <li
        className={`relative flex justify-center hover:cursor-pointer font-semibold text-sm md:text-lg px-2 py-3 ${
          context?.hoveredItem === "brands" &&
          "underline underline-offset-6 decoration-2"
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
                context?.isOpen ? "min-h-[15rem] border-b-2 py-4 " : "h-0"
              }`}
            >
              <div className="flex flex-1" />
              <div className="flex flex-col">
                <span className="subtitle-dropdown p-1">Discover</span>

                <Link
                  href="/watches"
                  className="capitalize  hover:bg-stone-500 hover:text-white p-1 rounded-md"
                >
                  View all
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="subtitle-dropdown p-1">Popular Brands</span>
                {uniqueBrands.map((brand, index) => (
                  <Link
                    href={`/watches/${params.category}/?brand=${brand}`}
                    key={index}
                    className="capitalize hover:cursor-pointer hover:bg-stone-500 hover:text-white p-1 rounded-md"
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
    </Link>
  );
}
