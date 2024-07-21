import React, { useState } from "react";

interface CollaborationCardProps {
  id: number;
  title: string;
  daysAgo: string;
  company: string;
  platforms: string;
  location: string;
  compensation: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: () => void;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({
  id,
  title,
  daysAgo,
  company,
  platforms,
  location,
  compensation,
  description,
  onDelete,
  onEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{daysAgo}</p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Platforms:</strong> {platforms}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Compensation:</strong> {compensation}
      </p>
      <p className="mb-4">{description}</p>
      <div className="flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          View
        </button>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96 z-50">
            <div className="text-center">
              <h2 className="text-xl font-bold my-4">
                Are you sure you want to delete this collaboration?
              </h2>
              <p className="text-gray-600 mb-4">
                You are about to{" "}
                <span className="text-red-500 font-bold">permanently</span>{" "}
                delete this collaboration. This action cannot be undone.
              </p>
              <div className="flex justify-around">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={handleCancelDelete}
                >
                  No, Don't delete
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationCard;
