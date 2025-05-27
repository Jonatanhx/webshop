import Image from "next/image";
import OAuthButtons from "./OAuthButtons";
import SignInForm from "./SignInForm";

export default async function SignInPage() {
  return (
    <main className="gap-16 p-20 justify-center">
      <Image src="./Peluche1.svg" width={200} height={400} alt="Peluche logo" />
      <SignInForm />
      <div className="flex flex-col w-[30%]">
        <span>When you create an account, you agree to our Terms of use.</span>
      </div>
      <OAuthButtons />
    </main>
  );
}
