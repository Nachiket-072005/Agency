import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("#dashboard");

  const MenuItem = ({ icon: Icon, label, href }) => (
    <li>
      <a
        href={href}
        className={activeItem === href ? "active" : ""}
        onClick={() => setActiveItem(href)}
      >
        <Icon />
        <span className="sidebar-label">{label}</span>
      </a>
    </li>
  );

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/100"
          alt="Agency"
          className="profile-image"
        />
        <h3 className="sidebar-label">Wanderlust Travels</h3>
      </div>

      <nav className="navigation">
        <ul>
          <MenuItem
            icon={FaTachometerAlt}
            label="Dashboard"
            href="#dashboard"
          />
          <MenuItem icon={FaBook} label="Bookings" href="#bookings" />
          <MenuItem icon={FaUsers} label="Clients" href="#clients" />
          <MenuItem icon={FaChartBar} label="Reports" href="#reports" />
          <MenuItem icon={FaCog} label="Settings" href="#settings" />
        </ul>
      </nav>

      <div className="logout-section">
        <button className="logout-button">
          <FaSignOutAlt />
          <span className="sidebar-label">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
