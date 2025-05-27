"use server";
import { serializeProducts } from "@/utils/helperFunctions";
import { prisma } from "../lib/prisma";

export async function getProductsByCategory(category: string) {
  const products = serializeProducts(
    await prisma.product.findMany({
      where: {
        productCategory: {
          some: {
            category: {
              name: category,
            },
          },
        },
      },
    })
  );
  return products;
}
