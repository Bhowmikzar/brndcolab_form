import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-white p-4 border-r border-gray-200">
      <h2 className="text-xl font-bold mb-4">Platforms</h2>
      <ul>
        <li className="mb-4">
          <h3 className="font-semibold">Instagram</h3>
          <Link
            to="/table/instagram"
            className="text-indigo-600 hover:text-indigo-900"
          >
            TOP 50 FOLLOWED INSTAGRAM USERS
          </Link>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">TikTok</h3>
          <Link
            to="/table/tiktok"
            className="text-indigo-600 hover:text-indigo-900"
          >
            TOP 50 FOLLOWED TIKTOK USERS
          </Link>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">YouTube</h3>
          <Link
            to="/table/youtube"
            className="text-indigo-600 hover:text-indigo-900"
          >
            TOP 50 SUBSCRIBED YOUTUBE CHANNELS
          </Link>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Twitter (X)</h3>
          <Link
            to="/table/twitter"
            className="text-indigo-600 hover:text-indigo-900"
          >
            TOP 50 FOLLOWED TWITTER (X) USERS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
