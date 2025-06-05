import React, { useState } from 'react';

export default function PackageList({ packages, onEdit, onDelete }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedPackage, setEditedPackage] = useState({});

  const startEdit = (index) => {
    setEditIndex(index);
    setEditedPackage(packages[index]);
  };

  const handleChange = (field, value) => {
    setEditedPackage({ ...editedPackage, [field]: value });
  };

  const saveEdit = () => {
    onEdit(editIndex, editedPackage);
    setEditIndex(-1);
  };

  return (
    <table className="package-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Duration(In Days)</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {packages.length === 0 ? (
          <tr><td colSpan="5" className="no-data">No packages added yet.</td></tr>
        ) : (
          packages.map((pkg, idx) => (
            <tr key={idx}>
              <td>
                {editIndex === idx ? (
                  <input
                    type="text"
                    value={editedPackage.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                  />
                ) : (
                  pkg.title
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="number"
                    value={editedPackage.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                  />
                ) : (
                  pkg.price
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="text"
                    value={editedPackage.duration}
                    onChange={(e) => handleChange('duration', e.target.value)}
                  />
                ) : (
                  pkg.duration
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <textarea
                    rows={3}
                    value={editedPackage.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                ) : (
                  pkg.description
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <>
                    <button onClick={saveEdit}>Save</button>
                    <button className="cancel-btn" onClick={() => setEditIndex(-1)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(idx)}>Edit</button>
                    <button onClick={() => onDelete(idx)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
