import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl">Home</div>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
