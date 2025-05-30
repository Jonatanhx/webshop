import { prisma } from "../lib/prisma";

export async function seedProducts() {
  await prisma.product.upsert({
    where: { name: "citizen-classic" },
    update: {},
    create: {
      name: "citizen-classic",
      price: 225.0,
      brand: "citizen",
      isFeatured: true,
      isTrending: false,
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
      isTrending: false,
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
      isTrending: false,
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
      isTrending: false,
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
      isTrending: false,
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
      isTrending: true,
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
      isTrending: true,
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
