import React from "react";
import { Link } from "react-router-dom";

const InfluencerMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="py-16"
        style={{ backgroundColor: "#212A31", color: "white" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">
            RESOURCES FOR INFLUENCER MARKETING EXCELLENCE
          </h1>
          <p className="mt-16 max-w-3xl mx-auto text-lg text-white">
            Welcome to BrandCollab, your ultimate Resource Hub for Influencer
            Marketing. Dive into our comprehensive influencer marketing
            resources, featuring industry insights, trend reports, videos, and
            data-driven tools. Empowering brands and influencers with the
            knowledge and tools to excel in influencer marketing.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to="/blog-post-1">
              <img
                src="https://via.placeholder.com/400x200"
                alt="TikTok"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Unlocking the Power of Influencer Marketing: A Comprehensive
                  Guide
                </h2>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to="/blog-post-2">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Authenticity"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Maximizing ROI with Influencer Marketing: A Guide for Brands
                  and Influencers
                </h2>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to="/blog-post-3">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Professional Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  The Evolution of Influencer Marketing: Embracing Authenticity
                  and Data-Driven Strategies
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerMarketing;
