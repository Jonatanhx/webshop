import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default async function RegisterPage() {
  return (
    <main className="p-20 justify-center gap-12">
      <Image
        src="./../Peluche1.svg"
        width={200}
        height={400}
        alt="Peluche logo"
      />
      <section className="flex flex-col gap-6 w-[30%]">
        <RegisterForm />
      </section>
    </main>
  );
}
