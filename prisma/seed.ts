import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function seedProducts() {
  await prisma.product.upsert({
    where: { name: "citizen-classic" },
    update: {},
    create: {
      name: "citizen-classic",
      price: 225.0,
      brand: "citizen",
      images: [
        "CitizenClassic1_gdwm7e",
        "CitizenClassic2_ydeouf",
        "CitizenClassic3_brxdyh",
      ],
      productCategory: {
        create: [
          {
            category: {
              connectOrCreate: {
                where: { name: "featured" },
                create: { name: "featured" },
              },
            },
          },
          {
            category: {
              connectOrCreate: {
                where: { name: "watches" },
                create: { name: "watches" },
              },
            },
          },
        ],
      },
    },
  });
}

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
