"use client";

import { usePathname } from "next/navigation";

export default function URLPath() {
  const params = usePathname()
    .split("/")
    .filter((param) => param.length != 0);

  return (
    <div className="flex gap-2 px-2">
      <p className="uppercase">home</p>
      {params.map((param, index) => (
        <p className="uppercase" key={index}>
          / {param.replace("-", " ")}
        </p>
      ))}
    </div>
  );
}
