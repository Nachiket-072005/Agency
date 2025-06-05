import React, { useState } from 'react';

export default function AddPackageForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState(''); // new description state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !duration || !description) {
      alert('Please fill in all fields.');
      return;
    }
    const newPackage = { title, price: parseFloat(price), duration, description };
    onAdd(newPackage);

    // Clear form fields
    setTitle('');
    setPrice('');
    setDuration('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='FormInpput'>
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
        style={{ resize: 'vertical' }}
      />
      <button type="submit">Add Package</button>
      </div>
    </form>
  );
}
