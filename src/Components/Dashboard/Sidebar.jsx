import React from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const MenuItem = ({ icon: Icon, label, href }) => (
    <li>
      <a href={href}>
        <Icon />
        {isExpanded && <span>{label}</span>}
      </a>
    </li>
  );

  return (
    <>
      {/* Mobile Toggle Button (☰ / ×) */}
      <div className="mobile-toggle" onClick={toggleSidebar}>
        {isExpanded ? <FaTimes /> : <FaBars />}
      </div>

      <aside className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/100"
            alt="Agency"
            className="profile-image"
          />
          {isExpanded && <h3>Wanderlust Travels</h3>}
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
            {isExpanded && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
