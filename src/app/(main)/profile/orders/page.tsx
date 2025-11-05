import { auth } from "@/auth";
import { Icon } from "@iconify/react/dist/iconify.js";
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
    <main id="main-content">
      <h1 className="heading w-full py-6">Order history</h1>
      <div className="flex w-full">
        <ProfileAside />
        <section className="flex w-full items-center gap-20 flex-col px-14">
          {orders.length > 0 ? (
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
                  <div className="flex flex-wrap flex-col md:flex-row">
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
                          <span className="capitalize">
                            {order.product.brand}
                          </span>
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
          ) : (
            <div className="flex w-full items-center gap-10 flex-col px-14">
              <Icon
                icon="material-symbols-light:shopping-bag-outline"
                className="size-[5rem]  mt-2"
              />
              <span className="text-neutral-700 text-lg">
                No recent orders were found
              </span>
              <button className="btn1 w-xl">Continue shopping</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
