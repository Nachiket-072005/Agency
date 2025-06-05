import React, { useState, useEffect } from "react";
import AddPackageForm from "./AddPackageForm";
import PackageList from "./PackageList";
import Stats from "./Stats";
import { dummyBookings } from "./dummyBookings";
import "./Dashboard.css";

export default function DashboardPage() {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState(dummyBookings);

  // Dark mode with localStorage
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  // Loading state for skeleton effect
  const [loading, setLoading] = useState(false);

  // Search & sorting states
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null); // e.g. "name" or "price"
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Simulate loading when adding or updating packages
  const simulateLoading = (callback) => {
    setLoading(true);
    setTimeout(() => {
      callback();
      setLoading(false);
    }, 700);
  };

  const addPackage = (newPkg) => {
    simulateLoading(() => setPackages([...packages, newPkg]));
  };

  const updatePackage = (index, updatedPkg) => {
    simulateLoading(() => {
      const newList = [...packages];
      newList[index] = updatedPkg;
      setPackages(newList);
    });
  };

  const deletePackage = (index) => {
    simulateLoading(() => {
      const newList = packages.filter((_, i) => i !== index);
      setPackages(newList);
    });
  };

  // Filter packages by search term
const filteredPackages = packages.filter(pkg =>
  (pkg.name || "").toLowerCase().includes((searchTerm || "").toLowerCase())
);


  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (!sortKey) return 0;
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedPackages.length / itemsPerPage);
  const paginatedPackages = sortedPackages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sorting handler
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="dashboard-container">
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>🌍 Tourixaa Admin Dashboard</h1>

      <Stats packages={packages} bookings={bookings} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search packages by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
          className="search-input"
        />
      </div>

      <AddPackageForm onAdd={addPackage} />

      <PackageList
        packages={paginatedPackages}
        onEdit={updatePackage}
        onDelete={deletePackage}
        loading={loading}
        onSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
