import FaqQuestions from "./faqQuestions";

export default async function faqPage() {
  return (
    <main className="flex flex-col py-6 md:p-20 items-center">
      <FaqQuestions />
    </main>
  );
}
