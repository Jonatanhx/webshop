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
      image: [
        "https://res.cloudinary.com/dfxyglpis/image/upload/v1746179123/CitizenClassic1_gdwm7e.png",
        "https://res.cloudinary.com/dfxyglpis/image/upload/v1746179123/CitizenClassic3_brxdyh.png",
        "https://res.cloudinary.com/dfxyglpis/image/upload/v1746179123/CitizenClassic2_ydeouf.png",
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
