import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What is BrandCollab?",
      answer:
        "BrandCollab is a platform that connects brands with influencers to create impactful marketing campaigns.",
    },
    {
      question: "How does BrandCollab work?",
      answer:
        "Brands post collaboration opportunities, and influencers apply to these opportunities. The platform facilitates communication and campaign management.",
    },
    {
      question: "Is BrandCollab free to use?",
      answer:
        "Yes, BrandCollab is free to use. We just take up a cut on the deal that goes through.",
    },
    {
      question: "Who can use BrandCollab?",
      answer:
        "BrandCollab is designed for brands looking to enhance their marketing efforts and influencers seeking collaboration opportunities.",
    },
    {
      question: "How do I sign up for BrandCollab?",
      answer:
        'You can sign up by clicking the "Sign Up" button on the homepage and filling out the required information.',
    },
  ],
  Build: [
    {
      question: "How do I create a brand profile?",
      answer:
        'To create a brand profile, go to your dashboard, click on "Create Profile," and fill in the necessary details about your brand.',
    },
    {
      question: "What information should be included in a brand profile?",
      answer:
        "Include your brand name, logo, a brief description, your target audience, and links to your social media accounts.",
    },
    {
      question: "Can I edit my brand profile after creating it?",
      answer:
        "Yes, you can edit your brand profile anytime by navigating to your profile settings and making the necessary changes.",
    },
    {
      question: "How do I add team members to my brand account?",
      answer:
        'Go to your account settings, click on "Team Members," and invite team members by entering their email addresses.',
    },
    {
      question: "What is the verification process for brands?",
      answer:
        "To verify your brand, you need to submit proof of your business, such as a website, social media links, or other relevant documents.",
    },
  ],
  Promote: [
    {
      question: "How do I promote my brand on BrandCollab?",
      answer:
        "You can promote your brand by creating engaging collaboration opportunities and participating in platform-wide campaigns.",
    },
    {
      question:
        "What are the best practices for creating collaboration opportunities?",
      answer:
        "Clearly define your campaign goals, target audience, and deliverables. Use attractive visuals and a compelling description.",
    },
    {
      question: "How do I track the performance of my promotional campaigns?",
      answer:
        "Use the analytics tools provided on your dashboard to monitor campaign performance, including impressions, engagement, and ROI.",
    },
    {
      question: "Can I collaborate with multiple influencers at once?",
      answer:
        "Yes, you can create campaigns that involve multiple influencers to maximize your reach and impact.",
    },
    {
      question:
        "What are the benefits of using influencers for brand promotion?",
      answer:
        "Influencers can help increase brand awareness, drive engagement, and reach niche audiences effectively.",
    },
  ],
  Manage: [
    {
      question: "How do I manage influencer applications?",
      answer:
        "Go to your campaign dashboard, where you can view, sort, and filter influencer applications based on your criteria.",
    },
    {
      question: "How do I communicate with influencers?",
      answer:
        "Use the in-platform messaging system to discuss campaign details, negotiate terms, and provide feedback.",
    },
    {
      question: "What tools are available for campaign management?",
      answer:
        "BrandCollab offers tools for task management, scheduling, content approval, and performance tracking.",
    },
    {
      question: "How do I approve influencer content?",
      answer:
        "Influencers will submit content for approval through the platform. You can review, request revisions, or approve the content directly.",
    },
    {
      question: "How do I handle payments to influencers?",
      answer:
        "Payments can be managed through BrandCollab’s secure payment gateway, ensuring timely and transparent transactions.",
    },
  ],
  Integrations: [
    {
      question: "What social media platforms does BrandCollab support?",
      answer:
        "BrandCollab supports major social media platforms, including Instagram, YouTube, TikTok, Facebook, and Twitter.",
    },
    {
      question: "How do I link my brand’s social media accounts?",
      answer:
        'Go to your profile settings, click on "Social Media Accounts," and follow the prompts to link your accounts.',
    },
    {
      question: "Can I integrate BrandCollab with other marketing tools?",
      answer:
        "Yes, BrandCollab offers integrations with popular marketing tools such as Google Analytics, Hootsuite, and Mailchimp.",
    },
    {
      question: "How do I set up social media tracking?",
      answer:
        "Use the analytics settings to link your social media accounts and set up tracking for campaign performance metrics.",
    },
    {
      question: "What data can I import/export from BrandCollab?",
      answer:
        "You can import/export data such as influencer lists, campaign performance reports, and communication logs.",
    },
  ],
  Legal: [
    {
      question: "What are the terms and conditions for using BrandCollab?",
      answer:
        "You can review the terms and conditions on our website, outlining the rights and responsibilities of both brands and influencers.",
    },
    {
      question: "How is my data protected on BrandCollab?",
      answer:
        "BrandCollab uses industry-standard security measures to protect your data, including encryption and secure servers.",
    },
    {
      question: "What are the privacy policies of BrandCollab?",
      answer:
        "Our privacy policy details how we collect, use, and protect your personal information. It is available on our website.",
    },
    {
      question: "How do I report a violation of terms?",
      answer:
        "If you encounter a violation of terms, you can report it through the platform’s support system or contact customer service.",
    },
    {
      question: "What are the guidelines for influencer collaborations?",
      answer:
        "The guidelines outline best practices for collaborations, including communication, content creation, and compensation. These are available in the resource section.",
    },
  ],
};

const FaqComponent: React.FC = () => {
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof faqData>("General");
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState<
    number | null
  >(null);

  const handleSectionClick = (section: keyof typeof faqData) => {
    setSelectedSection(section);
    setExpandedQuestionIndex(null);
  };

  const handleQuestionClick = (index: number) => {
    setExpandedQuestionIndex(expandedQuestionIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-4 text-center">FAQ</h1>
        <p className="text-center mb-8">Your questions answered here.</p>
        <div className="flex">
          <div className="w-1/4">
            <ul className="space-y-4 text-lg">
              {Object.keys(faqData).map((section) => (
                <li
                  key={section}
                  className={`cursor-pointer p-2 ${
                    selectedSection === section
                      ? "text-teal-500"
                      : "text-gray-400"
                  }`}
                  onClick={() =>
                    handleSectionClick(section as keyof typeof faqData)
                  }
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 pl-8">
            <h2 className="text-3xl font-semibold mb-4">
              {selectedSection} Questions
            </h2>
            {faqData[selectedSection].map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="cursor-pointer flex justify-between items-center p-4 bg-gray-800 border border-gray-700 rounded"
                  onClick={() => handleQuestionClick(index)}
                >
                  <h3 className="text-xl font-medium">{item.question}</h3>
                  <span>
                    {expandedQuestionIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                {expandedQuestionIndex === index && (
                  <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
