import { PrismaClient } from "@prisma/client";
import { seedProducts } from "./seedProducts";

const prisma = new PrismaClient();

export async function main() {
  seedProducts();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
