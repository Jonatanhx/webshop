import FaqQuestions from "./faqQuestions";

export default async function faqPage() {
  return (
    <main className="flex flex-col p-20 items-center">
      <FaqQuestions />
    </main>
  );
}
