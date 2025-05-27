"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface UserDropdownWrapperProps {
  children: React.ReactNode;
}

export default function UserDropdownWrapper({
  children,
}: UserDropdownWrapperProps) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRoot(document.getElementById("user-dropdown-root"));
  }, []);
  if (!root) return null;

  return createPortal(<div>{children}</div>, root);
}
