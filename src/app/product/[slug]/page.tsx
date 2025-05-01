import Image from "next/image";

export default function ProductPage() {
  return (
    <main>
      <div className="flex">
        <Image
          src="/watch1/CitizenClassic1.png"
          alt="Citizen classic"
          height={300}
          width={100}
        />
        <Image
          src="/watch1/CitizenClassic2.png"
          alt="Citizen classic"
          height={300}
          width={100}
        />
        <Image
          src="/watch1/CitizenClassic3.png"
          alt="Citizen classic"
          height={300}
          width={100}
        />
      </div>
    </main>
  );
}
