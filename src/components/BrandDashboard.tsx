import React from "react";

const BrandDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 flex items-center flex-col sm:flex-row">
        <img
          src="https://via.placeholder.com/50x50"
          alt="Brand Logo"
          className="h-12 w-12 rounded-full mb-4 sm:mb-0 sm:mr-4"
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Hello, BrandName
        </h1>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Metrics</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 w-full sm:w-1/2 lg:w-1/3 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-3xl font-medium mb-2">Campaigns</h3>
            <div className="mt-8 sm:mt-12 flex justify-between text-sm">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">10</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Total
                </span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">5</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Active
                </span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">5</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Completed
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-4 rounded-lg shadow h-48 w-full sm:w-1/2 lg:w-1/3 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-3xl font-medium mb-2">Applicants</h3>
            <div className="mt-8 sm:mt-12 flex justify-between text-sm">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">483</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Total
                </span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">12</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Accepted
                </span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">471</div>
                <span className="block mt-4" style={{ fontSize: "1.5rem" }}>
                  Rejected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">Create Campaign</h3>
            <p className="hidden sm:block">
              Set up and manage your influencer marketing campaigns.
            </p>
            <button className="mt-4 sm:mt-16 border-2 border-black text-black font-bold p-2 rounded">
              Create Campaign
            </button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">Manage Applications</h3>
            <p className="hidden sm:block">
              Track and manage influencer applications.
            </p>
            <button className="mt-4 sm:mt-16 border-2 border-black text-black font-bold p-2 rounded">
              Manage Applications
            </button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">Find Influencers</h3>
            <p className="hidden sm:block">
              Discover and connect with the right influencers for your brand.
            </p>
            <button className="mt-4 sm:mt-10 border-2 border-black text-black font-bold p-2 rounded">
              Source Influencers
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Team</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 w-full sm:w-1/2 lg:w-1/4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">Invite Team Members</h3>
            <p className="hidden sm:block">
              Collaborate with your team more effectively by inviting them to
              your campaigns.
            </p>
            <button className="mt-4 sm:mt-10 border-2 border-black text-black font-bold p-2 rounded">
              Invite Team Members
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Free Tools</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 w-full sm:w-1/2 lg:w-1/3 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">
              Instagram Engagement Calculator
            </h3>
            <p className="hidden sm:block">
              Calculate the engagement rate of any Instagram profile quickly and
              easily. Enter the Instagram ID and get instant insights.
            </p>
            <button className="mt-4 sm:mt-4 border-2 border-black text-black font-bold p-2 rounded">
              Calculate Engagement
            </button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow h-48 w-full sm:w-1/2 lg:w-1/3 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2">
              Top 50 Most Followed Instagram Profiles
            </h3>
            <p className="hidden sm:block">
              Explore the most followed profiles on Instagram. Stay updated with
              the top influencers and celebrities.
            </p>
            <button className="mt-4 sm:mt-10 border-2 border-black text-black font-bold p-2 rounded">
              View Top Profiles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDashboard;
