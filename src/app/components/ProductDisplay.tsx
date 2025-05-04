import { serializedProduct } from "@/types";
import { CldImage } from "next-cloudinary";
import { prisma } from "../../../lib/prisma";

interface ProductDisplayProps {
  props: string;
}

export default async function ProductDisplay({ props }: ProductDisplayProps) {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      name: props,
    },
  });

  const serializedProduct: serializedProduct = {
    name: product.name,
    id: product.id,
    brand: product.brand,
    images: product.images,
    price: Number(product.price),
  };

  return (
    <div>
      {serializedProduct.images.map((image, index) => (
        <CldImage
          key={index}
          src={image}
          alt="Citizen classic"
          height={300}
          width={100}
        />
      ))}
    </div>
  );
}
