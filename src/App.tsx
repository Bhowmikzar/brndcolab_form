//umcoment the sidebar & table thing together and comment the other thing while doing that and vise versa

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
// import CreateCollaborationPost from "./components/CrerateCollaborationPost";
// import FaqComponent from "./components/FaqComponents";
// import Table from "./components/Table";
// import Sidebar from "./components/Sidebar";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-100">
//         <Navbar />
//         <div className="flex flex-1">
//           {/* <Sidebar /> */}
//           <div className="flex-1 p-4">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/create" element={<CreateCollaborationPost />} />
//               <Route path="/edit" element={<CreateCollaborationPost />} />
//               <Route path="/faq" element={<FaqComponent />} />
//               {/* <Route path="/table/:platform" element={<Table />} /> */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

//umcomment the below thing for seeing the blogpost

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import InfluencerMarketing from "./components/InfluencerMarketing";
// import BlogPost1 from "./components/BlogPost1";
// import BlogPost2 from "./components/BlogPost2";
// import BlogPost3 from "./components/BlogPost3";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<InfluencerMarketing />} />
//           <Route path="/blog-post-1" element={<BlogPost1 />} />
//           <Route path="/blog-post-2" element={<BlogPost2 />} />
//           <Route path="/blog-post-3" element={<BlogPost3 />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

//umcomment the below thing for seeing the pricing page

import React from "react";
import PricingComponent from "./components/PricingComponent";

const App: React.FC = () => {
  return (
    <div>
      <PricingComponent />
    </div>
  );
};

export default App;
