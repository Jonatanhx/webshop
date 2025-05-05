"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Navbar() {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <nav className="flex flex-row bg-stone-300 w-full items-center justify-center">
      <ul className="flex gap-4">
        <li
          className="flex justify-center hover:cursor-pointer group py-2"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          Brands
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex hover:cursor-pointer py-2">
          Pre-owned
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex hover:cursor-pointer py-2">
          Mens watches
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex hover:cursor-pointer py-2">
          Womens watches
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
        <li className="flex hover:cursor-pointer py-2">
          Sell your watch
          <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
        </li>
      </ul>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`px-96
             absolute mt-64 w-full h-56 z-20 bg-white
             transition-opacity duration-300 ease-in-out
             ${
               hover
                 ? "opacity-100 pointer-events-auto bg-amber-400"
                 : "opacity-0 pointer-events-none"
             }
           `}
      >
        <ul className="border-l pl-2">
          <li>Citizen</li>
          <li>Bulova</li>
          <li>Omega</li>
          <li>Tag Heuer</li>
        </ul>
      </div>
    </nav>
  );
}
