import React, { useState } from "react";

export default function AddPackageForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [packageType, setPackageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !duration || !description || !packageType) {
      alert("Please fill in all fields.");
      return;
    }

    const newPackage = {
      title,
      price: parseFloat(price),
      duration,
      description,
      type: packageType,
    };

    onAdd(newPackage);

    // Clear form fields
    setTitle("");
    setPrice("");
    setDuration("");
    setDescription("");
    setPackageType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="FormInpput">
        <select
          name="packageType"
          className="package-dropdown"
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          required
        >
          <option value="">-- Select Package Type --</option>
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

        <input
          type="text"
          placeholder="Package Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (e.g., 5 days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{ resize: "vertical" }}
        />
        <button type="submit">Add Package</button>
      </div>
    </form>
  );
}
