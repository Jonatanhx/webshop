"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function URLPath() {
  const params = usePathname()
    .split("/")
    .filter((param) => param.length != 0);

  return (
    <div className="flex px-2">
      <Link href="/" className="hover:border-b">
        <p className="capitalize">home</p>
      </Link>

      {params.map((param, index) => (
        <div key={index} className="flex">
          <p className="px-2">/</p>
          <Link href={`/watches/${param}`} className="hover:border-b">
            <p className="capitalize">{param.replace("-", " ")}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
