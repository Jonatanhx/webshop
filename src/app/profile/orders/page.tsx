import { auth } from "@/auth";
import { prisma } from "../../../../lib/prisma";

export default async function OrdersPage() {
  const session = await auth();
  const orders = await prisma.order.findMany({
    where: {
      userId: session?.user?.id,
    },
    include: {
      ProductsInOrders: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <main className="px-48">
      <ul className="p-6 border">
        {orders.map((order) => (
          <li key={order.id} className="bg-neutral-100 p-20">
            {order.ProductsInOrders.map((order) => (
              <div key={order.product.id} className="border">
                {order.product.name}
                {order.product.images[0]}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </main>
  );
}
