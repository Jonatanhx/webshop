import FaqQuestions from "./faqQuestions";

export default async function faqPage() {
  return (
    <main id="main-content">
      <h1 className="heading self-start border-b border-neutral-300 w-full py-2">
        FAQ
      </h1>
      <FaqQuestions />
    </main>
  );
}
