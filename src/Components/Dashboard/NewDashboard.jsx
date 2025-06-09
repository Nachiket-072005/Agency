import React from "react";
import Sidebar from "./Sidebar";
import "./dashboard1.css";

const NewDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h2>Agency Admin Dashboard</h2>
      </main>
    </div>
  );
};

export default NewDashboard;
