import React from "react";
import { useParams } from "react-router-dom";

interface TableRowProps {
  rank: number;
  profile: string;
  profileImg: string;
  username: string;
  followers: string;
  following: number;
  posts: number;
  engagementRate: string;
  profileLink: string;
}

const instagramData: TableRowProps[] = [
  {
    rank: 1,
    profile: "Instagram",
    profileImg: "https://via.placeholder.com/50", // Replace with actual image URL
    username: "instagram",
    followers: "673.6M",
    following: 95,
    posts: 7024,
    engagementRate: "0.03%",
    profileLink: "#",
  },
  {
    rank: 2,
    profile: "Cristiano Ronaldo",
    profileImg: "https://via.placeholder.com/50", // Replace with actual image URL
    username: "cristiano",
    followers: "632.6M",
    following: 575,
    posts: 3198,
    engagementRate: "0.90%",
    profileLink: "#",
  },
  // Add more data as needed
];

const Table: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();

  let data: TableRowProps[] = [];
  let comingSoon = false;
  let platformName = "";

  switch (platform) {
    case "instagram":
      data = instagramData;
      platformName = "Instagram";
      break;
    case "tiktok":
    case "youtube":
    case "twitter":
      comingSoon = true;
      platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
      break;
    default:
      break;
  }

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">{`TOP 50 FOLLOWED ${platformName.toUpperCase()} USERS`}</h2>
      {comingSoon ? (
        <div className="text-center py-8">
          <p className="mt-4">Coming soon</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Profile
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Followers
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Following
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Posts
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Engagement Rate
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
                  Profile Link
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((row) => (
                <tr key={row.rank}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    #{row.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                    <img
                      src={row.profileImg}
                      alt={row.profile}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    {row.profile}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    @{row.username}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {row.followers}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {row.following}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {row.posts}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {row.engagementRate}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <a
                      href={row.profileLink}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Go to profile
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
