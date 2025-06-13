import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Agency Admin Dashboard</h2>
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-right">
        <FaUserCircle size={28} />
      </div>
    </div>
  );
};

export default Navbar;
