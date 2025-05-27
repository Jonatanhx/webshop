import OAuthButtons from "./OAuthButtons";
import SignInForm from "./SignInForm";

export default async function SignInPage() {
  return (
    <main className="flex gap-12 p-20">
      <SignInForm />
      <div className="flex flex-col w-[30%]">
        <span>When you create an account, you agree to our Terms of use.</span>
      </div>
      <OAuthButtons />
    </main>
  );
}
