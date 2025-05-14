import Link from "next/link";
import CheckoutProgressBar from "../CheckoutProgressBar";

export default async function CompletedPage() {
  return (
    <main className="flex flex-col items-center py-16 px-32 gap-32">
      <CheckoutProgressBar />
      <div className="flex flex-col gap-4 text-center">
        <h1 className="heading">Success!</h1>
        <h2>Your order is being processed</h2>
        <h3>A receipt has been sent to your email</h3>
      </div>
      <Link href="/" className="w-[20%]">
        <button className="btn1 w-full">Home</button>
      </Link>
    </main>
  );
}
