"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { NavDropdownContext } from "../contexts/NavDropdownContext";
import NavDropdownWrapper from "./NavDropdownWrapper";

interface CategoriesDropdownProps {
  props: {
    id: string;
    name: string;
  };
}

export default function CategoriesDropdown({ props }: CategoriesDropdownProps) {
  const context = useContext(NavDropdownContext);
  return (
    <li
      onMouseEnter={() => {
        context?.setIsOpen(true);
        context?.setHoveredItem(`${props.name}`);
      }}
      onMouseLeave={() => {
        context?.setIsOpen(false);
        context?.setHoveredItem("");
      }}
      className="flex hover:cursor-pointer capitalize font-semibold py-3"
    >
      {props.name.replace("-", " ")}
      <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      {context?.hoveredItem === props.name && (
        <NavDropdownWrapper>
          <div
            onMouseEnter={() => {
              context?.setIsOpen(true);
              context?.setHoveredItem(`${props.name}`);
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
              <ul>{props.name}</ul>
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
