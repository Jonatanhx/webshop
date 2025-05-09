import { prisma } from "../lib/prisma";

export async function seedCategories() {
  await prisma.category.upsert({
    where: { name: "brands" },
    update: {},
    create: {
      name: "brands",
    },
  });
}
