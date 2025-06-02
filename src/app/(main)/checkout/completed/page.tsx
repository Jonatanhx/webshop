import Link from "next/link";

export default async function CompletedPage() {
  return (
    <main className="flex flex-col items-center py-16 md:px-48 gap-4">
      <h1 className="heading">Success!</h1>
      <h2>Your order is being processed</h2>
      <h3>A receipt has been sent to your email</h3>
      <Link
        href="/"
        className="btn1 my-6 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[33%]"
      >
        Home
      </Link>
    </main>
  );
}
