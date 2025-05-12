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
      className={`border-2  ${
        isOpen ? "border-black border-b-0" : "border-transparent"
      } `}
    >
      <Link href="/profile">
        <Icon
          icon="material-symbols-light:person-outline"
          className="size-9 mt-2"
        />
      </Link>
      <UserDropdownWrapper>
        <div
          className={`absolute right-0 w-[50%] bg-white flex flex-row overflow-hidden ${
            isOpen ? "h-[8rem]" : "h-0"
          } `}
        >
          <div
            className={`flex flex-col flex-1 ${
              isOpen ? "border-2  border-r-0" : ""
            }`}
          >
            <p>{props.user?.name}</p>
            <p>Your account</p>
            <p>Orders</p>
            <p>Return an order</p>
            <p>Help & FAQ</p>
          </div>
          <div
            className={`flex w-[2.4rem] ${
              isOpen ? "border-r-2 border-b-2" : ""
            }`}
          />
        </div>
      </UserDropdownWrapper>
    </div>
  );
}
