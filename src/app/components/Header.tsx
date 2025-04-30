import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="py-1">
        <p className="subtext">1-2 weekday delivery on most items*</p>
      </div>
      <Image
        src="/Peluche1.svg"
        alt="Logo"
        width={200}
        height={300}
        className="py-1"
      />
    </header>
  );
}
