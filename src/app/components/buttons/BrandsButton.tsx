"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import NavDropdownWrapper from "../NavDropdownWrapper";

export default function BrandsButton() {
  const [dropdown, showDropdown] = useState<boolean>(false);
  return (
    <li
      className={`relative flex justify-center hover:cursor-pointer font-semibold py-3 ${
        dropdown && "underline underline-offset-4"
      }`}
      onMouseOver={() => {
        showDropdown(true);
      }}
      onMouseLeave={() => {
        showDropdown(false);
      }}
    >
      Brands
      <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      <NavDropdownWrapper>
        <div
          onMouseEnter={() => showDropdown(true)}
          onMouseLeave={() => showDropdown(false)}
          className={`flex absolute transition-maxheight duration-300 ease-in-out bg-white w-full gap-32 overflow-hidden ${
            dropdown ? "h-[15rem] border-b-2 py-4 " : "h-0"
          }`}
        >
          <div className="flex flex-1" />
          <div>
            <p className="subtitle">Discover</p>
            <ul>
              <li>View all</li>
            </ul>
          </div>
          <div>
            <p className="subtitle">Trending Watches</p>
            <ul>
              <li>Citizen Tsuyosa</li>
              <li>Bulova Marine Star</li>
              <li>Citizen Classic</li>
              <li>Bulova A15-Pilot</li>
            </ul>
          </div>
          <div>
            <p className="subtitle">Popular Brands</p>
            <ul>
              <li>Citizen</li>
              <li>Bulova</li>
            </ul>
          </div>
          <div className="flex flex-1" />
        </div>
      </NavDropdownWrapper>
    </li>
  );
}
