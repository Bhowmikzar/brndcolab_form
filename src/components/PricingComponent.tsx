import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PricingComponent: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the commission rate for using BrandCollab?",
      answer:
        "BrandCollab charges a simple, flat 10% commission on each successful collaboration. There are no hidden fees or monthly charges.",
    },
    {
      question: "Are there any upfront costs or subscription fees?",
      answer:
        "No, there are no upfront costs or subscription fees. You only pay a commission on successful collaborations.",
    },
    {
      question: "How is the commission calculated?",
      answer:
        "The 10% commission is calculated based on the total amount of each successful collaboration between brands and influencers.",
    },
    {
      question: "Will the commission rate ever change?",
      answer:
        "Our commitment is to keep our pricing simple and transparent. Any changes to the commission rate will be communicated well in advance and will be designed to continue offering value to our users.",
    },
    {
      question: "Are there any additional charges besides the commission?",
      answer:
        "No, the 10% commission is the only fee you will be charged. There are no additional or hidden fees when using BrandCollab.",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#212A31] py-10 text-center text-white">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <h2 className="text-3xl font-bold mt-4">10% Flat Commission</h2>
        <p className="mt-6 max-w-2xl mx-auto leading-relaxed">
          We believe in simplifying your influencer marketing efforts, not
          complicating them with fees. That's why BrandCollab charges no monthly
          fees and takes only a small commission on each successful
          collaboration.
        </p>
      </div>
      <div className="w-full bg-white mt-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">FAQs</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left p-4 font-medium flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>
                  {open === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {open === index && (
                <div className="p-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
