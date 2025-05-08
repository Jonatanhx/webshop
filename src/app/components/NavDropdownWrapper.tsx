import { createPortal } from "react-dom";

interface NavDropdownWrapperProps {
  children: React.ReactNode;
}

export default function NavDropdownWrapper({
  children,
}: NavDropdownWrapperProps) {
  const root = document.getElementById("nav-dropdown-root");
  if (root === null) {
    console.error("portal root not found");
  }
  return (
    <div>
      <div>{root && createPortal(<div>{children}</div>, root)}</div>
    </div>
  );
}
