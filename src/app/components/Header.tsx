import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SettingsBar from "./SettingsBar";
import UserBar from "./UserBar";

export default function Header() {
  return (
    <header className="flex flex-col items-center sticky top-0 z-10 bg-white">
      <div className="flex pt-1 w-full px-6 items-center">
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
            className="pb-2"
          />
        </Link>
        <UserBar />
      </div>
      <Navbar />
    </header>
  );
}
