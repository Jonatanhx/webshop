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
  await prisma.product.upsert({
    where: { name: "caravelle-traditional-gold" },
    update: {},
    create: {
      name: "caravelle-traditional-gold",
      price: 945.0,
      brand: "caravelle",
      isFeatured: false,
      isTrending: false,
      images: [
        "CaravelleTraditionalGold_atc1wy",
        "CaravelleTraditionalGold2_plmhcd",
        "CaravelleTraditionalGold3_pjduj1",
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
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "caravelle-traditional-gold-slim" },
    update: {},
    create: {
      name: "caravelle-traditional-gold-slim",
      price: 845.0,
      brand: "caravelle",
      isFeatured: true,
      isTrending: true,
      images: [
        "CaravelleTraditionalSlim_f1z79r",
        "CaravelleTraditionalSlim2_chvard",
        "CaravelleTraditionalSlim3_oixqhj",
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
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "caravelle-traditional" },
    update: {},
    create: {
      name: "caravelle-traditional",
      price: 435.0,
      brand: "caravelle",
      isFeatured: false,
      isTrending: false,
      images: [
        "CaravelleTraditional_sgrzzo",
        "CaravelleTraditional2_ikfmwz",
        "CaravelleTraditional3_kg6rje",
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
  await prisma.product.upsert({
    where: { name: "caravelle-hedge" },
    update: {},
    create: {
      name: "caravelle-hedge",
      price: 220.0,
      brand: "caravelle",
      isFeatured: false,
      isTrending: false,
      images: ["CaravelleHedge_rjnazv"],
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
  await prisma.product.upsert({
    where: { name: "caravelle-classic" },
    update: {},
    create: {
      name: "caravelle-classic",
      price: 290.0,
      brand: "caravelle",
      isFeatured: true,
      isTrending: true,
      images: ["CaravelleClassic_i1avya", "CaravelleClassic2_hlcien"],
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
  await prisma.product.upsert({
    where: { name: "bulova-sutton" },
    update: {},
    create: {
      name: "bulova-sutton",
      price: 310.0,
      brand: "bulova",
      isFeatured: false,
      isTrending: true,
      images: [
        "BulovaSutton_gjr4jy",
        "BulovaSutton2_hmljnc",
        "BulovaSutton3_elbvc1",
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
        ],
      },
    },
  });
  await prisma.product.upsert({
    where: { name: "citizen-promaster-dive" },
    update: {},
    create: {
      name: "citizen-promaster-dive",
      price: 425.0,
      brand: "citizen",
      isFeatured: false,
      isTrending: false,
      images: ["CitizenPromasterDive_enqo7e", "CitizenPromasterDive2_nd4zzr"],
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
    where: { name: "citizen-promaster-GMT-eco-drive" },
    update: {},
    create: {
      name: "citizen-promaster-GMT-eco-drive",
      price: 550.0,
      brand: "citizen",
      isFeatured: true,
      isTrending: true,
      images: [
        "CitizenPromasterGMTEcoDrive_evaasi",
        "CitizenPromasterGMTEcoDrive2_bl08gy",
        "CitizenPromasterGMTEcoDrive3_cvo10x",
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
}
