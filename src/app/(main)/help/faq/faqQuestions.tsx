"use client";

import { faqQA } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function FaqQuestions() {
  const [selectedQ, setSelectedQ] = useState<string>("");
  const faq: faqQA[] = [
    {
      question: "What is Peluche?",
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
    {
      question: "How can i track my parcel?",
      answer: "By contacting a clairvoyant",
    },
  ];
  function toggleQuestion(qa: faqQA) {
    if (selectedQ === qa.question) {
      setSelectedQ("");
      return;
    }
    setSelectedQ(qa.question);
  }

  return (
    <div className="w-full space-y-4 py-6">
      {faq.map((qa, index) => (
        <div onClick={() => toggleQuestion(qa)} className="flex " key={index}>
          <div className="flex flex-col flex-1">
            <span className="title items-center flex justify-between border p-4">
              {qa.question}
              <Icon icon="mdi-light:chevron-down" className="size-8 pt-1" />
            </span>
            {selectedQ === qa.question && (
              <span className="subtitle p-4 border border-black border-t-0">
                {qa.answer}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
