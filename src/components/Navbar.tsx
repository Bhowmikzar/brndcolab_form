import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-xl">Home</div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </nav>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="text-center">
              <h2 className="text-xl font-bold my-4">
                Are you sure you want to logout from this Account?
              </h2>
              <p className="text-gray-600 mb-4">
                You are about to logout from this account
              </p>
              <p className="text-gray-600 mb-4">
                This action if confirmed is{" "}
                <span className="text-red-500 font-bold">irreversible</span>.
              </p>
              <div className="flex justify-around">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  No, Don't logout
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Yes, logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
