import React, { useState } from "react";

const CreateCollaborationPost: React.FC = () => {
  const [isInfluencerDropdownVisible, setIsInfluencerDropdownVisible] =
    useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);
  const [selectedInfluencerType, setSelectedInfluencerType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleInfluencerDropdown = () => {
    setIsInfluencerDropdownVisible(!isInfluencerDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const handleInfluencerSelect = (type: string) => {
    setSelectedInfluencerType(type);
    setIsInfluencerDropdownVisible(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryDropdownVisible(false);
  };

  const placeholderStyle = "text-gray-400";

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Brand Onboarding</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Create Collaboration Post</h2>

        <label className="block mb-2">Campaign Title:</label>
        <input
          type="text"
          placeholder="Enter Campaign Title"
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Campaign Description:</label>
        <textarea
          placeholder="Describe your campaign, goals, and expectations..."
          className="w-full p-2 border rounded mb-4"
        ></textarea>

        <label className="block mb-2">Target Audience:</label>
        <textarea
          placeholder="Describe Target Audience"
          className="w-full p-2 border rounded mb-4"
        ></textarea>

        <label className="block mb-2">Desired Influencer Type:</label>
        <div className="relative mb-4">
          <button
            type="button"
            className={`w-full p-2 border rounded text-left ${
              !selectedInfluencerType ? placeholderStyle : ""
            }`}
            onClick={toggleInfluencerDropdown}
          >
            {selectedInfluencerType || "Select Influencer Type"}
          </button>
          {isInfluencerDropdownVisible && (
            <div className="absolute w-full border rounded bg-white mt-2 shadow-lg z-10">
              {["Micro-Influencer", "Macro-Influencer", "Nano-Influencer"].map(
                (type) => (
                  <div
                    key={type}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleInfluencerSelect(type)}
                  >
                    {type}
                  </div>
                )
              )}
            </div>
          )}
        </div>

        <label className="block mb-2">Budget/Compensation:</label>
        <input
          type="text"
          placeholder="Enter Budget or Compensation Details"
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Campaign Duration:</label>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Start Date:</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2">End Date:</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
        </div>

        <label className="block mb-2">Categories:</label>
        <div className="relative mb-4">
          <button
            type="button"
            className={`w-full p-2 border rounded text-left ${
              !selectedCategory ? placeholderStyle : ""
            }`}
            onClick={toggleCategoryDropdown}
          >
            {selectedCategory || "Select Category"}
          </button>
          {isCategoryDropdownVisible && (
            <div className="absolute w-full border rounded bg-white mt-2 shadow-lg z-10">
              {["Fashion", "Lifestyle"].map((category) => (
                <div
                  key={category}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="block mb-2">Tags:</label>
        <input
          type="text"
          placeholder="Enter Tags"
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCollaborationPost;
