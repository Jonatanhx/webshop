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
                where: { name: "mens-watches" },
                create: { name: "mens-watches" },
              },
            },
          },
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "bulova-clipper" },
    update: {},
    create: {
      name: "bulova-clipper",
      price: 345.0,
      brand: "bulova",
      images: [
        "BulovaClipper1_uvpulw",
        "BulovaClipper2_mvy50z",
        "BulovaClipper3_hl9kyu",
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
                where: { name: "mens-watches" },
                create: { name: "mens-watches" },
              },
            },
          },
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "bulova-a15-pilot" },
    update: {},
    create: {
      name: "bulova-15-pilot",
      price: 369.99,
      brand: "bulova",
      images: ["BulovaA15-pilot_wucryl"],
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
                where: { name: "mens-watches" },
                create: { name: "mens-watches" },
              },
            },
          },
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "bulova-curv" },
    update: {},
    create: {
      name: "bulova-curv",
      price: 345.0,
      brand: "bulova",
      images: [
        "BulovaCurv1_jcdngs",
        "BulovaCurv2_enzljr",
        "BulovaCurv3_gz3vlj",
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
                where: { name: "mens-watches" },
                create: { name: "mens-watches" },
              },
            },
          },
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "citizen-tsuyosa" },
    update: {},
    create: {
      name: "citizen-tsuyosa",
      price: 345.0,
      brand: "citizen",
      images: [
        "CitizenTsuyosa1_liym5t",
        "CitizenTsuyosa2_ovhb52",
        "CitizenTsuyosa3_hprh1z",
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
                where: { name: "mens-watches" },
                create: { name: "mens-watches" },
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
