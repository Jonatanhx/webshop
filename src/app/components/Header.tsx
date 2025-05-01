import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import UserBar from "./UserBar";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="py-1">
        <p className="subtext">1-2 weekday delivery on most items*</p>
      </div>
      <div className="flex items-center w-full px-6">
        <div className="flex flex-1" />
        <Link href="/">
          <Image
            src="/Peluche1.svg"
            alt="Logo"
            width={200}
            height={300}
            className="py-1"
          />
        </Link>
        <UserBar />
      </div>
      <Navbar />
    </header>
  );
}
