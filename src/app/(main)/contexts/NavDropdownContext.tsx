"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface NavDropdownContextProps {
  isOpen: boolean;
  hoveredItem: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setHoveredItem: Dispatch<SetStateAction<string>>;
}

export const NavDropdownContext = createContext<
  NavDropdownContextProps | undefined
>(undefined);

export function NavDropdownProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string>("");
  return (
    <NavDropdownContext.Provider
      value={{ isOpen, hoveredItem, setIsOpen, setHoveredItem }}
    >
      {children}
    </NavDropdownContext.Provider>
  );
}
