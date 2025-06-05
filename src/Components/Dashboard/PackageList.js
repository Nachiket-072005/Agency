import React, { useState } from "react";

export default function PackageList({
  packages,
  onEdit,
  onDelete,
  loading,
  onSort,
  sortKey,
  sortOrder,
}) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    price: 0,
    duration: "",
    description: "",
    type: "",
  });

  const getSortClass = (key) => {
    if (sortKey !== key) return "";
    return sortOrder === "asc" ? "sorted-asc" : "sorted-desc";
  };

  // Start editing a package: set index and populate form data
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditFormData({ ...packages[index] });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  // Save edited data and close edit form
  const handleSave = (e) => {
    e.preventDefault();
    onEdit(editingIndex, editFormData);
    setEditingIndex(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingIndex(null);
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (packages.length === 0) {
    return <p style={{ textAlign: "center" }}>No packages found.</p>;
  }

  return (
    <>
      <table className="package-table">
        <thead>
          <tr>
            <th
              className={getSortClass("title")}
              onClick={() => onSort("title")}
              title="Sort by Title"
            >
              Title
            </th>
            <th
              className={getSortClass("price")}
              onClick={() => onSort("price")}
              title="Sort by Price"
            >
              Price (₹)
            </th>
            <th
              className={getSortClass("duration")}
              onClick={() => onSort("duration")}
              title="Sort by Duration"
            >
              Duration
            </th>
            <th>Description</th>
            <th
              className={getSortClass("type")}
              onClick={() => onSort("type")}
              title="Sort by Type"
            >
              Type
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => {
            if (editingIndex === index) {
              // Render editable row for the package being edited
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={editFormData.price}
                      onChange={handleChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="duration"
                      value={editFormData.duration}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleChange}
                      required
                      rows={2}
                    />
                  </td>
                  <td>
                    <select
        name="type"
        value={editFormData.type}
        onChange={handleChange}
        required
      >
        <option value="">Select Type</option>
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
                  </td>
                  <td>
                    <button
                      className="action-btn edit"
                      onClick={handleSave}
                      title="Save"
                    >
                      Save
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={handleCancel}
                      title="Cancel"
                      style={{ backgroundColor: "#ccc", color: "#333" }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            }

            // Normal display row
            return (
              <tr key={index}>
                <td>{pkg.title}</td>
                <td>{pkg.price.toFixed(2)}</td>
                <td>{pkg.duration}</td>
                <td>{pkg.description}</td>
                <td>{pkg.type}</td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => startEdit(index)}
                    title="Edit Package"
                  >
                    Edit
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete "${pkg.title}"?`
                        )
                      ) {
                        onDelete(index);
                      }
                    }}
                    title="Delete Package"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
