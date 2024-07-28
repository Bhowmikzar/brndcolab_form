import React from "react";

interface Profile {
  username: string;
  name: string;
  followers: number;
  following: number;
  posts: number;
  engagementRate: number;
  avgLikes: number;
  avgComments: number;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 my-10 text-center max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <img
          src="https://via.placeholder.com/100x100" // Replace with actual profile picture source if available
          alt={`${profile.username} profile`}
          className="h-24 w-24 rounded-full mr-8"
        />
        <div className="text-left">
          <h2 className="text-4xl font-bold">{profile.name}</h2>
          <p className="text-gray-600 text-xl">@{profile.username}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div>
          <p className="text-3xl font-bold">
            {profile.followers.toLocaleString()}
          </p>
          <p className="text-gray-600 text-lg">FOLLOWERS</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{profile.following}</p>
          <p className="text-gray-600 text-lg">FOLLOWING</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{profile.posts.toLocaleString()}</p>
          <p className="text-gray-600 text-lg">POSTS</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center items-center mb-2">
            <img
              src="/path-to-engagement-icon.png"
              alt="Engagement Icon"
              className="h-6 w-6"
            />
            <p className="text-2xl font-bold ml-2">{profile.engagementRate}%</p>
          </div>
          <p className="text-gray-600 text-lg">Engagement Rate</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center items-center mb-2">
            <img
              src="/path-to-likes-icon.png"
              alt="Likes Icon"
              className="h-6 w-6"
            />
            <p className="text-2xl font-bold ml-2">
              {profile.avgLikes.toLocaleString()}
            </p>
          </div>
          <p className="text-gray-600 text-lg">Avg. Likes</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center items-center mb-2">
            <img
              src="/path-to-comments-icon.png"
              alt="Comments Icon"
              className="h-6 w-6"
            />
            <p className="text-2xl font-bold ml-2">
              {profile.avgComments.toLocaleString()}
            </p>
          </div>
          <p className="text-gray-600 text-lg">Avg. Comments</p>
        </div>
      </div>
      <p className="text-red-500 text-lg">
        @{profile.username}'s engagement is below average.
      </p>
    </div>
  );
};

export default ProfileCard;
