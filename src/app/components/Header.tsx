import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SettingsBar from "./SettingsBar";
import UserBar from "./UserBar";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="flex py-1 w-full px-6 items-center">
        <div className="flex flex-1"></div>
        <p className="subtext">1-2 weekday delivery on most items*</p>
        <SettingsBar />
      </div>
      <div className="flex items-center w-full px-6">
        <div className="flex flex-1">
          <Icon icon="quill:hamburger" className="size-6" />
        </div>
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
