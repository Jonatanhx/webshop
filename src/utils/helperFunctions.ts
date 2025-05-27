import { product, serializedProduct } from "@/types";

export function getCookieByName(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
  return null;
}

export function serializeProducts(products: product[]): serializedProduct[] {
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
}
