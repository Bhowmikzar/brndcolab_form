import React from "react";
import CreateCollaborationPost from "./components/CrerateCollaborationPost";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Brand Onboarding</h1>
      <CreateCollaborationPost />
    </div>
  );
};

export default App;
