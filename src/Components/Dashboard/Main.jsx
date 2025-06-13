import React from "react";
import "./Main.css";
import Analytical from "./Analytical";

const Main = () => {
  return (
    <div className="main">
      {/* Top Navbar */}
      <header className="top-navbar">
        <h1>Agency Admin Dashboard</h1>
      </header>

      {/* Overview Cards */}
      <div className="cards">
        <div className="card purple">
          Image Uploads: <strong>210</strong>
        </div>
        <div className="card blue">
          Total Messages: <strong>210</strong>
        </div>
        <div className="card green">
          Orders Posted: <strong>210</strong>
        </div>
        <div className="card red">
          Revenue: <strong>$25,000</strong>
        </div>
      </div>

      {/* Chart Section */}
      <div className="analytics">
        <Analytical />
      </div>

      {/* Table Section */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>City</th>
              <th>Street</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gibson</td>
              <td>Lake Zeba</td>
              <td>Kulas Shoals</td>
            </tr>
            <tr>
              <td>Armstrong</td>
              <td>East Pierce</td>
              <td>Lyla Heights</td>
            </tr>
            <tr>
              <td>Funk</td>
              <td>SkySide</td>
              <td>Jolie Shoals</td>
            </tr>
            <tr>
              <td>Langosh</td>
              <td>Anashire</td>
              <td>Sim Station</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
