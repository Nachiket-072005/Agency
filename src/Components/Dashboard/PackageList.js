// import React, { useState } from "react";

// export default function PackageList({
//   packages,
//   onEdit,
//   onDelete,
//   loading,
//   onSort,
//   sortKey,
//   sortOrder,
// }) {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     title: "",
//     price: 0,
//     duration: "",
//     description: "",
//     type: "",
//   });

//   const getSortClass = (key) => {
//     if (sortKey !== key) return "";
//     return sortOrder === "asc" ? "sorted-asc" : "sorted-desc";
//   };

//   // Start editing a package: set index and populate form data
//   const startEdit = (index) => {
//     setEditingIndex(index);
//     setEditFormData({ ...packages[index] });
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prev) => ({
//       ...prev,
//       [name]: name === "price" ? parseFloat(value) || 0 : value,
//     }));
//   };

//   // Save edited data and close edit form
//   const handleSave = (e) => {
//     e.preventDefault();
//     onEdit(editingIndex, editFormData);
//     setEditingIndex(null);
//   };

//   // Cancel editing
//   const handleCancel = () => {
//     setEditingIndex(null);
//   };

//   if (loading) {
//     return <p style={{ textAlign: "center" }}>Loading...</p>;
//   }

//   if (packages.length === 0) {
//     return <p style={{ textAlign: "center" }}>No packages found.</p>;
//   }

//   return (
//     <>
//       <table className="package-table">
//         <thead>
//           <tr>
//             <th
//               className={getSortClass("title")}
//               onClick={() => onSort("title")}
//               title="Sort by Title"
//             >
//               Title
//             </th>
//             <th
//               className={getSortClass("price")}
//               onClick={() => onSort("price")}
//               title="Sort by Price"
//             >
//               Price (₹)
//             </th>
//             <th
//               className={getSortClass("duration")}
//               onClick={() => onSort("duration")}
//               title="Sort by Duration"
//             >
//               Duration
//             </th>
//             <th>Description</th>
//             <th
//               className={getSortClass("type")}
//               onClick={() => onSort("type")}
//               title="Sort by Type"
//             >
//               Type
//             </th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {packages.map((pkg, index) => {
//             if (editingIndex === index) {
//               // Render editable row for the package being edited
//               return (
//                 <tr key={index}>
//                   <td>
//                     <input
//                       type="text"
//                       name="title"
//                       value={editFormData.title}
//                       onChange={handleChange}
//                       required
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       name="price"
//                       value={editFormData.price}
//                       onChange={handleChange}
//                       step="0.01"
//                       min="0"
//                       required
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="duration"
//                       value={editFormData.duration}
//                       onChange={handleChange}
//                       required
//                     />
//                   </td>
//                   <td>
//                     <textarea
//                       name="description"
//                       value={editFormData.description}
//                       onChange={handleChange}
//                       required
//                       rows={2}
//                     />
//                   </td>
//                   <td>
//                     <select
//         name="type"
//         value={editFormData.type}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Select Type</option>
//         <option value="International">International</option>
//         <option value="Domestic">Domestic</option>
//         <option value="Group Tour">Group Tour</option>
//         <option value="Solo Tour">Solo Tour</option>
//         <option value="Nature & Tracking">Nature & Tracking</option>
//         <option value="Maharaja Express">Maharaja Express</option>
//         <option value="Honeymoon Package">Honeymoon Package</option>
//         <option value="Senior Citizen">Senior Citizen</option>
//         <option value="Business Packages">Business Packages</option>
//         <option value="Children Places">Children Places</option>
//       </select>
//                   </td>
//                   <td>
//                     <button
//                       className="action-btn edit"
//                       onClick={handleSave}
//                       title="Save"
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="action-btn delete"
//                       onClick={handleCancel}
//                       title="Cancel"
//                       style={{ backgroundColor: "#ccc", color: "#333" }}
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               );
//             }

//             // Normal display row
//           // Normal display row
// return (
//   <tr key={index}>
//     <td data-label="Title">{pkg.title}</td>
//     <td data-label="Price (₹)">{pkg.price.toFixed(2)}</td>
//     <td data-label="Duration">{pkg.duration}</td>
//     <td data-label="Description">{pkg.description}</td>
//     <td data-label="Type">{pkg.type}</td>
//     <td data-label="Actions">
//       <button
//         className="action-btn edit"
//         onClick={() => startEdit(index)}
//         title="Edit Package"
//       >
//         Edit
//       </button>
//       <button
//         className="action-btn delete"
//         onClick={() => {
//           if (
//             window.confirm(
//               `Are you sure you want to delete "${pkg.title}"?`
//             )
//           ) {
//             onDelete(index);
//           }
//         }}
//         title="Delete Package"
//       >
//         Delete
//       </button>
//     </td>
//   </tr>
// );

//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }
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
  const [searchTerm, setSearchTerm] = useState("");

  const getSortClass = (key) => {
    if (sortKey !== key) return "";
    return sortOrder === "asc" ? "sorted-asc" : "sorted-desc";
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditFormData({ ...packages[index] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(editingIndex, editFormData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPackages = packages.filter((pkg) => {
    return (
      pkg.title.toLowerCase().includes(searchTerm) ||
      pkg.type.toLowerCase().includes(searchTerm) ||
      pkg.description.toLowerCase().includes(searchTerm) ||
      pkg.duration.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (packages.length === 0) {
    return <p style={{ textAlign: "center" }}>No packages found.</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      {/* Search input */}
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <table className="package-table">
        <thead>
          <tr>
            <th
              onClick={() => onSort("title")}
              className={getSortClass("title")}
            >
              Title
            </th>
            <th
              onClick={() => onSort("price")}
              className={getSortClass("price")}
            >
              Price (₹)
            </th>
            <th
              onClick={() => onSort("duration")}
              className={getSortClass("duration")}
            >
              Duration
            </th>
            <th>Description</th>
            <th onClick={() => onSort("type")} className={getSortClass("type")}>
              Type
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPackages.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No matching packages found.
              </td>
            </tr>
          ) : (
            filteredPackages.map((pkg, index) => {
              const isEditing = editingIndex === index;

              return (
                <tr key={index}>
                  {isEditing ? (
                    <>
                      <td data-label="Title">
                        <input
                          type="text"
                          name="title"
                          value={editFormData.title}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td data-label="Price (₹)">
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
                      <td data-label="Duration">
                        <input
                          type="text"
                          name="duration"
                          value={editFormData.duration}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td data-label="Description">
                        <textarea
                          name="description"
                          value={editFormData.description}
                          onChange={handleChange}
                          rows={2}
                          required
                        />
                      </td>
                      <td data-label="Type">
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
                          <option value="Nature & Tracking">
                            Nature & Tracking
                          </option>
                          <option value="Maharaja Express">
                            Maharaja Express
                          </option>
                          <option value="Honeymoon Package">
                            Honeymoon Package
                          </option>
                          <option value="Senior Citizen">Senior Citizen</option>
                          <option value="Business Packages">
                            Business Packages
                          </option>
                          <option value="Children Places">
                            Children Places
                          </option>
                        </select>
                      </td>
                      <td data-label="Actions">
                        <button
                          className="action-btn edit"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                        <button
                          className="action-btn delete"
                          onClick={handleCancel}
                          style={{ backgroundColor: "#ccc", color: "#333" }}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td data-label="Title">{pkg.title}</td>
                      <td data-label="Price (₹)">{pkg.price.toFixed(2)}</td>
                      <td data-label="Duration">{pkg.duration}</td>
                      <td data-label="Description">{pkg.description}</td>
                      <td data-label="Type">{pkg.type}</td>
                      <td data-label="Actions">
                        <button
                          className="action-btn edit"
                          onClick={() => startEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="action-btn delete"
                          onClick={() => {
                            if (
                              window.confirm(`Delete package "${pkg.title}"?`)
                            ) {
                              onDelete(index);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
