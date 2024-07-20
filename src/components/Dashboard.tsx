import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CollaborationCard from "./CollaborationCard";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [collaborations, setCollaborations] = useState([
    {
      id: 1,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
    {
      id: 2,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
    {
      id: 3,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
    {
      id: 4,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
    {
      id: 5,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
    {
      id: 6,
      title: "Promoter for upcoming Dawn of Justice Movie",
      daysAgo: "2 days ago",
      company: "DC Comics",
      platforms: "Instagram, Facebook",
      location: "USA & Canada",
      compensation: "$20,000 - $30,000",
      description: "Promote the latest DC comics movie.",
    },
  ]);

  const handleDelete = (id: number) => {
    const updatedCollaborations = collaborations.filter(
      (collab) => collab.id !== id
    );
    setCollaborations(updatedCollaborations);
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Collaborations</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/create")}
        >
          Create New Collaboration
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collaborations.map((collab) => (
          <CollaborationCard
            key={collab.id}
            id={collab.id}
            title={collab.title}
            daysAgo={collab.daysAgo}
            company={collab.company}
            platforms={collab.platforms}
            location={collab.location}
            compensation={collab.compensation}
            description={collab.description}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
