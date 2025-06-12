"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function URLPath() {
  const params = useParams();

  return (
    <div className="hidden px-2 gap-2 capitalize self-start md:flex">
      <Link href="/" className="hover:underline underline-offset-4">
        home
      </Link>
      /
      <Link href="/watches" className="hover:underline underline-offset-4">
        watches
      </Link>
      /
      <Link
        href={`/watches/${params.category}`}
        className="hover:underline underline-offset-4"
      >
        {params.category?.toString().replace("-", " ")}
      </Link>
      /
      <Link
        href={`/watches/${params.category}/${params.slug}`}
        className="hover:underline underline-offset-4"
      >
        {params.slug?.toString().replace("-", " ")}
      </Link>
    </div>
  );
}
