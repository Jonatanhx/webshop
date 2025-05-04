"use client";

import ProductDisplay from "@/app/components/ProductDisplay";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { slug } = useParams();
  return <main>{slug && <ProductDisplay props={slug.toString()} />}</main>;
}
