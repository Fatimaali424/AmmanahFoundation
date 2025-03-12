'use client';
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Amanah Foundation?",
    answer:
      "Amanah Foundation is a non-profit organization dedicated to humanitarian aid, education, and community support.",
  },
  {
    question: "How can I donate?",
    answer:
      "You can donate through contacting us or visit our email to contribute in person.",
  },
  {
    question: "Can I volunteer for projects?",
    answer:
      "Yes! We welcome volunteers for our various initiatives. Please contact us for more information.",
  },
  {
    question: "Where do the donations go?",
    answer:
      "All donations go towards humanitarian aid, education, and community welfare projects.",
  },
  {
    question: "What projects are currently active?",
    answer:
      "Our current project is focused on Ramadan Iftar and grocery distribution for the underprivileged.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-serif">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-red-800 text-center mb-6">Frequently Asked Questions</h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl shadow-md overflow-hidden">
              {/* Question */}
              <button
                className="w-full p-4 flex justify-between items-center text-left text-lg font-semibold text-pink-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* Answer (Expandable) */}
              {openIndex === index && (
                <div className="p-4 bg-pink-50 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
