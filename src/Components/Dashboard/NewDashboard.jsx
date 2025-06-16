import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./NewDashboard.css";

const NewDashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <Main />
        </main>
      </div>
    </>
  );
};

export default NewDashboard;
