import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col border-t min-h-[20rem] justify-between items-center pb-4">
      <section className="flex gap-36 items-center min-h-[12rem]">
        <div className="h-[8rem] w-[12rem]">
          <p className="font-semibold">Help</p>
          <div>
            <p>FAQ</p>
            <p>Track your parcel</p>
            <p>Return an item</p>
          </div>
        </div>
        <div className="h-[8rem] w-[12rem]">
          <p className="font-semibold">Connect</p>
          <div>
            <p>About us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
      </section>

      <Image src="/Peluche1.svg" alt="Peluche logo" width={200} height={300} />

      <p className="subtitle">All images licensed under CC BY-NC 4.0</p>
    </footer>
  );
}
