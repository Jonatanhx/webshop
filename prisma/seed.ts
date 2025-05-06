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
      isFeatured: true,
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
      isFeatured: true,
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
      name: "bulova-a15-pilot",
      price: 369.0,
      brand: "bulova",
      isFeatured: true,
      images: ["BulovaA15-pilot_wucryl"],
      productCategory: {
        create: [
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
      price: 395.0,
      brand: "bulova",
      isFeatured: true,
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
      price: 325.0,
      brand: "citizen",
      isFeatured: true,
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
    where: { name: "citizen-quartz" },
    update: {},
    create: {
      name: "citizen-quartz",
      price: 415.0,
      brand: "citizen",
      isFeatured: false,
      images: ["CitizenQuartz1_upsxau", "CitizenQuartz2_unhc09"],
      productCategory: {
        create: [
          {
            category: {
              connectOrCreate: {
                where: { name: "womens-watches" },
                create: { name: "womens-watches" },
              },
            },
          },
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "bulova-marine-star" },
    update: {},
    create: {
      name: "bulova-marine-star",
      price: 445.0,
      brand: "bulova",
      isFeatured: false,
      images: [
        "BulovaMarineStar1_klzpee",
        "BulovaMarineStar2_xan1op",
        "BulovaMarineStar3_keivio",
      ],
      productCategory: {
        create: [
          {
            category: {
              connectOrCreate: {
                where: { name: "womens-watches" },
                create: { name: "womens-watches" },
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
