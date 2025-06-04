import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="flex flex-col border-t justify-between items-center">
      {/* <section className="flex justify-around items-center min-h-[12rem] w-full md:w-[50%]">
        <div>
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
        <div>
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
      </section> */}
      <div className="flex flex-col items-center gap-6 p-4">
        <Image
          src="/Peluche1.svg"
          alt="Peluche logo"
          width={200}
          height={300}
        />

        <p className="subtitle">All images licensed under CC BY-NC 4.0</p>
      </div>
    </footer>
  );
}
