import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateCollaborationPost from "./components/CrerateCollaborationPost";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateCollaborationPost />} />
            <Route path="/edit" element={<CreateCollaborationPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
