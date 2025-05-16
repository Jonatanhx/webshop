"use client";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { NavDropdownContext } from "../contexts/NavDropdownContext";
import NavDropdownWrapper from "./NavDropdownWrapper";

interface BrandsDropdownProps {
  props: serializedProduct[];
}

export default function BrandsDropdown({ props }: BrandsDropdownProps) {
  const context = useContext(NavDropdownContext);
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
                <li className="capitalize hover:cursor-pointer border-b border-transparent hover:border-black">
                  View all
                </li>
              </ul>
            </div>
            <div>
              <p className="subtitle">Trending Watches</p>
              <ul>
                {trending.map((product) => (
                  <li
                    className="capitalize border-b border-transparent hover:border-black hover:cursor-pointer"
                    key={product.id}
                  >
                    {product.name.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="subtitle">Popular Brands</p>
              <ul>
                {uniqueBrands.map((product, index) => (
                  <li
                    key={index}
                    className="capitalize hover:cursor-pointer border-b border-transparent hover:border-black"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1" />
          </div>
        </NavDropdownWrapper>
      )}
    </li>
  );
}
