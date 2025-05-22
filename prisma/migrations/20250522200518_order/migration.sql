-- CreateTable
CREATE TABLE "ProductsInOrders" (
    "productId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "ProductsInOrders_pkey" PRIMARY KEY ("productId","orderId")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductsInOrders" ADD CONSTRAINT "ProductsInOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInOrders" ADD CONSTRAINT "ProductsInOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
