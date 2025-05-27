"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { User } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import UserDropdownWrapper from "./UserDropdownWrapper";

interface UserDropdownProps {
  props: {
    user: User | undefined;
  };
}

export function UserDropdown({ props }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`border-2 border-b-0 px-1 ${
        isOpen ? "border-black" : "border-transparent"
      } `}
    >
      <Link href="/profile">
        <Icon
          icon="material-symbols-light:person-outline"
          className="size-9 mt-1"
        />
      </Link>
      <UserDropdownWrapper>
        <div
          className={` absolute right-0 w-[50%] bg-white flex flex-row overflow-hidden ${
            isOpen ? "h-[12rem]" : "h-0"
          } `}
        >
          <div
            className={`p-4 flex flex-col gap-2 flex-1 ${
              isOpen ? "border-2  border-r-0" : ""
            }`}
          >
            <p className="border-b">{props.user?.name}</p>
            <Link
              href="/profile"
              className="no-underline hover:underline hover:underline-offset-4 self-start"
            >
              Your account
            </Link>
            <Link
              href="/profile/orders"
              className="no-underline hover:underline hover:underline-offset-4 self-start"
            >
              Orders
            </Link>
            <Link
              href="/help/faq"
              className="no-underline hover:underline hover:underline-offset-4 self-start"
            >
              Help & FAQ
            </Link>
          </div>
          <div
            className={`flex w-[2.9rem] ${
              isOpen ? "border-r-2 border-b-2" : ""
            }`}
          />
        </div>
      </UserDropdownWrapper>
    </div>
  );
}
