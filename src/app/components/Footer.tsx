import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="flex flex-col border-t min-h-[20rem] justify-between items-center pb-4">
      <section className="flex gap-36 items-center min-h-[12rem]">
        <div className="h-[8rem] w-[12rem]">
          <p className="font-semibold">Help</p>
          <ul>
            <Link href="/help/faq">
              <li className="hover:underline underline-offset-4">FAQ</li>
            </Link>

            <Link href="/profile/orders">
              <li className="hover:underline underline-offset-4">
                View my orders
              </li>
            </Link>
          </ul>
        </div>
        <div className="h-[8rem] w-[12rem]">
          <p className="font-semibold">Connect</p>
          <ul>
            <Link href="/">
              <li className="hover:underline underline-offset-4">About us</li>
            </Link>
            <Link href="/connect/contact">
              <li className="hover:underline underline-offset-4">Contact</li>
            </Link>
          </ul>
        </div>
      </section>

      <Image src="/Peluche1.svg" alt="Peluche logo" width={200} height={300} />

      <p className="subtitle">All images licensed under CC BY-NC 4.0</p>
    </footer>
  );
}
