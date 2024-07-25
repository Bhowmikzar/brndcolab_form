import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateCollaborationPost from "./components/CrerateCollaborationPost";
import FaqComponent from "./components/FaqComponents";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create" element={<CreateCollaborationPost />} />
              <Route path="/edit" element={<CreateCollaborationPost />} />
              <Route path="/faq" element={<FaqComponent />} />
              <Route path="/table/:platform" element={<Table />} />{" "}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
