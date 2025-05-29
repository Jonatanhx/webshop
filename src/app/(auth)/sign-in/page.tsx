import Image from "next/image";
import Link from "next/link";
import OAuthButtons from "./OAuthButtons";
import SignInForm from "./SignInForm";

export default async function SignInPage() {
  return (
    <main className="p-20 justify-center gap-12">
      <Image src="./Peluche1.svg" width={200} height={400} alt="Peluche logo" />
      <section className="flex flex-col gap-6 w-[30%]">
        <SignInForm />
        <div className="flex flex-col"></div>
        <div className="flex flex-col gap-2">
          <span>No account? </span>
          <Link href="/sign-in/register" className="btn2">
            Register now
          </Link>
        </div>

        <OAuthButtons />
      </section>
    </main>
  );
}
