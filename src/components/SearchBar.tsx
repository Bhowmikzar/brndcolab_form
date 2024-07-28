import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import FAQ from "./FAQ";

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<any>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Replace with actual API call
    const mockProfiles: { [key: string]: any } = {
      therock: {
        username: "therock",
        name: "Dwayne Johnson",
        followers: 396500000,
        following: 0,
        posts: 7844,
        engagementRate: 0.11,
        avgLikes: 424100,
        avgComments: 5700,
      },
      msdhoni: {
        username: "msdhoni",
        name: "MS Dhoni",
        followers: 35000000,
        following: 1,
        posts: 1080,
        engagementRate: 1.12,
        avgLikes: 400000,
        avgComments: 8000,
      },
    };
    const profile = mockProfiles[username.toLowerCase()];
    if (profile) {
      setProfile(profile);
    } else {
      alert("Profile not found");
    }
  };

  const handleClearProfile = () => {
    setUsername("");
    setProfile(null);
  };

  return (
    <div>
      <div className="container mx-auto p-8 text-center bg-[#212A31] text-white pb-20">
        <h1 className="text-4xl font-bold mb-4">
          Instagram Engagement Rate Calculator
        </h1>
        <p className="mb-6 text-xl">
          Check any brand or influencer engagement on Instagram for free.
          Insights for your Instagram profiles.
        </p>
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center mb-8 relative"
        >
          <div className="relative">
            <input
              type="text"
              className="border p-3 rounded-l w-96 text-black pr-10"
              placeholder="Instagram @username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {profile && (
              <FaTimes
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={handleClearProfile}
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-r"
          >
            Check Profile
          </button>
        </form>
      </div>
      {profile && (
        <div className="bg-white">
          <ProfileCard profile={profile} />
        </div>
      )}
      <div className="bg-white mt-12 ">
        <FAQ />
      </div>
    </div>
  );
};

export default SearchBar;
