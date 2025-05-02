"use client";
import { CldImage } from "next-cloudinary";

export default function ProductPage() {
  return (
    <main>
      <div className="flex justify-center">
        <CldImage
          src="CitizenClassic1_gdwm7e"
          alt="Citizen classic"
          height={300}
          width={100}
        />
        <CldImage
          src="CitizenClassic2_ydeouf"
          alt="Citizen classic"
          height={300}
          width={100}
        />
        <CldImage
          src="CitizenClassic3_brxdyh"
          alt="Citizen classic"
          height={300}
          width={100}
        />
      </div>
    </main>
  );
}
