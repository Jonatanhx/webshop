import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../../../../lib/prisma";
import ProfileAside from "../ProfileAside";
import OrderImage from "./OrderImage";

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

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main id="profile-main">
      <ProfileAside />
      <section className="flex flex-1 flex-col self-start px-8">
        <h1 className="heading border-b border-neutral-300 py-2">Orders</h1>
        <ul className="flex flex-col gap-6 py-6">
          {orders.map((order) => (
            <li
              key={order.id}
              className="border-b border-neutral-300 flex flex-col py-2"
            >
              <span className="font-semibold">
                Order number:{" "}
                {order.id
                  .split("")
                  .filter((c) => c >= "0" && c <= "9")
                  .join("")}
              </span>
              <span>Order date: 2025/05/23</span>
              <span>Total cost: $1054.00</span>
              <div className="flex flex-col md:flex-row">
                {order.ProductsInOrders.map((order) => (
                  <div
                    key={order.product.id}
                    className="flex flex-col gap-6 p-6 items-center"
                  >
                    <div className="relative w-[8rem] h-[14rem]">
                      <OrderImage
                        props={{
                          image: order.product.images[0],
                          name: order.product.name,
                        }}
                      />
                    </div>
                    <div className="flex flex-col font-semibold">
                      <span className="capitalize">{order.product.brand}</span>
                      <span className="capitalize text-neutral-500">
                        {order.product.name.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
