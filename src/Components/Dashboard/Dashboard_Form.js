import React, { useState } from "react";
import AddPackageForm from "./AddPackageForm";
import PackageList from "./PackageList";
import Stats from "./Stats";
import { dummyBookings } from "./dummyBookings";
import "./Dashboard_Form.css";

export default function DashboardPage() {
  const [packages, setPackages] = useState([]);
  const [bookings] = useState(dummyBookings);
  const [loading, setLoading] = useState(false);

  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

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
      setPackages(packages.filter((_, i) => i !== index));
    });
  };

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = (pkg.title || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || pkg.type === selectedType;
    return matchesSearch && matchesType;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (!sortKey) return 0;
    return sortOrder === "asc"
      ? a[sortKey] > b[sortKey]
        ? 1
        : -1
      : a[sortKey] < b[sortKey]
      ? 1
      : -1;
  });

  const totalPages = Math.ceil(sortedPackages.length / itemsPerPage);
  const paginatedPackages = sortedPackages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div>
      <Stats packages={packages} bookings={bookings} />

      <div className="controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="filter-dropdown"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Types</option>
          <option value="International">International</option>
          <option value="Domestic">Domestic</option>
          <option value="Group Tour">Group Tour</option>
          <option value="Solo Tour">Solo Tour</option>
          <option value="Nature & Tracking">Nature & Tracking</option>
          <option value="Maharaja Express">Maharaja Express</option>
          <option value="Honeymoon Package">Honeymoon Package</option>
          <option value="Senior Citizen">Senior Citizen</option>
          <option value="Business Packages">Business Packages</option>
          <option value="Children Places">Children Places</option>
        </select>
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
