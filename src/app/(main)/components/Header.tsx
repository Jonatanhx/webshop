import { auth } from "@/auth";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
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
      <div className="w-full sm:px-6 sm:pt-1 items-center hidden md:flex">
        <div className="w-[25%]" />
        <p className="flex justify-center subtitle w-[50%]">
          1-2 weekday delivery on most items*
        </p>
        <SettingsBar />
      </div>
      <div className="flex items-center w-full px-6">
        <div className="w-[25%]" />

        <Link href="/" className="flex w-[50%] justify-center pt-1 pb-2">
          <Image
            src="/Peluche1.svg"
            alt="Logo"
            width={200}
            height={300}
            priority
          />
        </Link>
        <div className="flex justify-end w-[25%]">
          <Icon icon="quill:hamburger" className="size-6 flex md:hidden" />
          {!session ? (
            <div className="flex flex-col justify-center">
              <Link
                className="hidden md:flex text-white bg-neutral-600 hover:bg-neutral-600/70 px-4 py-1 hover:cursor-pointer rounded-xl duration-300 mx-2"
                href="/sign-in"
              >
                Sign in
              </Link>
            </div>
          ) : (
            <div className="flex flex-1 flex-col relative">
              <div className="flex items-center justify-end">
                <SignOutButton />
                <UserDropdown props={{ user }} />
              </div>
              <div id="user-dropdown-root" />
            </div>
          )}
          <UserBar />
        </div>
      </div>
      <Navbar />
      <div className="relative bg-white w-full z-10" id="nav-dropdown-root" />
    </header>
  );
}
