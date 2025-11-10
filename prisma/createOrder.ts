"use server";
import { auth } from "@/auth";
import { serializedProduct } from "@/types";
import { prisma } from "../lib/prisma";

export async function createOrder(cartItems: serializedProduct[]) {
  const session = await auth();

  await prisma.order.create({
    data: {
      ProductsInOrders: {
        create: cartItems.map((product) => ({
          product: {
            connect: { id: product.id },
          },
        })),
      },
      user: {
        connect: { id: session?.user?.id },
      },
    },
  });
}
