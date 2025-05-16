"use client";

import { useState } from "react";

export default function FilterByBrandButton() {
  const [setIsOpen] = useState<boolean>(false);
  return <button onClick={() => setIsOpen}></button>;
}
