import { serializedProduct } from "@/types";

interface ProductCardProps {
  children: React.ReactNode;
  props: serializedProduct;
}

export default function ProductCard({ children, props }: ProductCardProps) {
  return (
    <li className="">
      {children}
      <h2 className="title uppercase pt-4 pb-2">{props.brand}</h2>
      <p className="subtitle capitalize">{props.name.replace("-", " ")}</p>
      <p>${props.price}.00</p>
    </li>
  );
}
