"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface NavDropdownWrapperProps {
  children: React.ReactNode;
}

export default function NavDropdownWrapper({
  children,
}: NavDropdownWrapperProps) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRoot(document.getElementById("nav-dropdown-root"));
  }, []);
  if (!root) return null;

  return createPortal(<div>{children}</div>, root);
}
