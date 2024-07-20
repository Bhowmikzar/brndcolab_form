import React from "react";

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
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CollaborationCard;
