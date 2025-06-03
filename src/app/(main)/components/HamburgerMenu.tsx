"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRoot(document.getElementById("hamburger-menu-root"));
  }, []);
  if (!root) return null;

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  //  <-- Add this back to icon
  return (
    <div className="flex items-center">
      <button onClick={toggleOpen}>
        <Icon icon="quill:hamburger" className="size-7 pt-1 flex md:hidden" />
      </button>
      {createPortal(
        isOpen && (
          <div
            id="dark-overlay"
            className="fixed inset-0 w-full h-full bg-black/60 z-50"
          >
            <div className="p-4 w-[75%] h-full border border-neutral-300 bg-white flex flex-col absolute top-0 left-0 z-60">
              <div className="relative flex w-full">
                <h1 className="heading">Menu</h1>
                <button onClick={() => toggleOpen()}>
                  <Icon
                    className="absolute top-0 right-0 hover:scale-110 text-black hover:cursor-pointer size-7"
                    icon="system-uicons:cross"
                  />
                </button>
              </div>
              <div className="flex flex-col gap-4 py-4">
                <Link
                  href="/profile"
                  className="text-xl font-semibold flex justify-between items-center"
                >
                  Your account{" "}
                  <Icon icon="mdi:chevron-right" className="size-6 mt-1" />
                </Link>
                <Link
                  href="/wishlist"
                  className="text-xl font-semibold flex justify-between items-center"
                >
                  Wishlist
                  <Icon icon="mdi:chevron-right" className="size-6 mt-1" />
                </Link>
                <Link
                  href="/cart"
                  className="text-xl font-semibold flex justify-between items-center"
                >
                  Cart
                  <Icon icon="mdi:chevron-right" className="size-6 mt-1" />
                </Link>
              </div>
            </div>
          </div>
        ),
        root
      )}
    </div>
  );
}
