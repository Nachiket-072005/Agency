import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./dashboard1.css";
import Navbar from "./Navbar";

const NewDashboard = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
      {/* <Navbar /> */}
      {/* Pass state and toggle to Sidebar */}
      <Sidebar
        isExpanded={isSidebarExpanded}
        toggleSidebar={handleToggleSidebar}
      />

      {/* Pass sidebar state to Main */}
      <main className="main-content">
        <Main isSidebarExpanded={isSidebarExpanded} />
      </main>
    </div>
  );
};

export default NewDashboard;