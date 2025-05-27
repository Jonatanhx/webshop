"use client";

import { serializedProduct } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { NavDropdownContext } from "../contexts/NavDropdownContext";
import { getProductsByCategory } from "./../../../../prisma/getProductsByCategory";
import NavDropdownWrapper from "./NavDropdownWrapper";

interface CategoriesDropdownProps {
  props: {
    category: {
      name: string;
      id: string;
    };
    products: serializedProduct[];
  };
}

export default function CategoriesDropdown({ props }: CategoriesDropdownProps) {
  const context = useContext(NavDropdownContext);
  const [categoryProducts, setCategoryProducts] = useState<serializedProduct[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(props.category.name);
      setCategoryProducts(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <li
      onMouseEnter={() => {
        context?.setIsOpen(true);
        context?.setHoveredItem(`${props.category.name}`);
      }}
      onMouseLeave={() => {
        context?.setIsOpen(false);
        context?.setHoveredItem("");
      }}
      className={`flex hover:cursor-pointer capitalize font-semibold px-2 py-3 ${
        context?.hoveredItem === props.category.name &&
        "underline underline-offset-4"
      }`}
    >
      {props.category.name.replace("-", " ")}
      <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      {context?.hoveredItem === props.category.name && (
        <NavDropdownWrapper>
          <div
            onMouseEnter={() => {
              context?.setIsOpen(true);
              context?.setHoveredItem(`${props.category.name}`);
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
            <div className="flex flex-col">
              <p className="subtitle">Trending Watches</p>

              {categoryProducts.map((product) => (
                <Link
                  href={`/watches/${props.category.name}/${product.name}`}
                  className="capitalize hover:underline underline-offset-4"
                  key={product.id}
                >
                  {product.name.replace("-", " ")}
                </Link>
              ))}
            </div>
            <div>
              <p className="subtitle">Popular Brands</p>
              <ul></ul>
            </div>
            <div className="flex flex-1" />
          </div>
        </NavDropdownWrapper>
      )}
    </li>
  );
}
