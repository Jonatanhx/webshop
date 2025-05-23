import { auth } from "@/auth";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "./buttons/SignInButton";
import SignOutButton from "./buttons/SignOutButton";
import Navbar from "./Navbar";
import SettingsBar from "./SettingsBar";
import UserBar from "./UserBar";
import { UserDropdown } from "./UserDropdown";

export default async function Header() {
  const session = await auth();

  const user = session?.user;

  return (
    <header className="flex flex-col items-center sticky top-0 z-40 bg-white">
      <div className="flex pt-1 w-full px-6 items-center">
        <div className="flex flex-1"></div>
        <p className="subtitle">1-2 weekday delivery on most items*</p>
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
            priority
          />
        </Link>
        <div className="flex flex-1 justify-end gap-2">
          {!session ? (
            <SignInButton />
          ) : (
            <div className="flex flex-1 flex-col relative">
              <div className="flex items-center justify-end gap-2">
                <SignOutButton />
                <UserDropdown props={{ user }} />
              </div>
              <div id="user-dropdown-root" />
            </div>
          )}
        </div>
        <UserBar />
      </div>
      <Navbar />
      <div className="relative bg-white w-full z-10" id="nav-dropdown-root" />
    </header>
  );
}
