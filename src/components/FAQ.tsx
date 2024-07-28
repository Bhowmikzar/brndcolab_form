import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Is this Instagram Engagement Calculator free?",
    answer: "Yes, this Instagram engagement calculator is totally free.",
  },
  {
    question: "How Instagram Engagement Rate Calculator works?",
    answer:
      "An engagement rate calculator is a tool to calculate how engaged a user's followers are on Instagram. The tool works by analyzing 12 or 18 of the user's recent posts and adding their average likes and comments before dividing it by their follower count to calculate their engagement rate.",
  },
  {
    question: "How to calculate Engagement Rate?",
    answer: (
      <>
        <p>Engagement rate is calculated by using this</p>
        <p>
          Formula: Average Organic Engagement Rate (%) = Total Engagement /
          Total number of followers x 100.
        </p>
        <p>
          You can apply the formula to a single post, or to view an overall
          average for any profile.
        </p>
      </>
    ),
  },
  {
    question:
      "Can I use this Engagement Calculator to find influencers for your brand?",
    answer:
      "Yes, you can find the influencers with the best engagement rate and make sure your brand will have great visibility.",
  },
  {
    question: "Why do we check the last 18 posts?",
    answer:
      "According to different studies carried out by marketing agencies, it has been revealed that analyzing 18 posts is sufficient to grasp the nature of Engagement Rate for most Instagram accounts and profiles, ranging from those that post once a week to those that have multiple posts daily. If there are fewer than 18 posts, we will adjust the calculation accordingly.",
  },
  {
    question: "What does it mean to have low engagement?",
    answer:
      "A low engagement can mean many things, but typically, it indicates that their audience does not like the content that is being posted, Instagram's algorithm is not showing it to enough of their followers, or that most of the creator’s followers are bots or inactive accounts. Using Rafflys's free Instagram engagement rate calculator can give you insights into any Instagram account's engagement and followers.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div key={index} className="my-2 border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 bg-white hover:bg-gray-100 rounded-t flex justify-between items-center"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 rounded-b text-left">
              {typeof faq.answer === "string" ? (
                <p>{faq.answer}</p>
              ) : (
                faq.answer
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
