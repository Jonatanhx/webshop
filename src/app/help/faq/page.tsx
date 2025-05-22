type faqQA = {
  question: string;
  answer: string;
};

export default async function faqPage() {
  const faq: faqQA[] = [
    {
      question: "Who are Peluche?",
      answer: "Peluche is a made up watch reseller e-commerce brand",
    },

    {
      question: "Can I order products from Peluche?",
      answer: "No you can not order anything from this page",
    },
    {
      question: "How is my data handled?",
      answer:
        "We do not store any important data of our users for metrics or other uses",
    },
  ];
  return (
    <main>
      {faq.map((qa, index) => (
        <div key={index}>
          <span className="title">{qa.question}</span>
          <span className="subtitle">{qa.answer}</span>
        </div>
      ))}
    </main>
  );
}
