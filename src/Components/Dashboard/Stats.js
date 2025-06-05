import React from "react";

export default function Stats({ packages, bookings }) {
  const totalPackages = packages.length;
  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((acc, b) => acc + b.amount, 0);

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Packages</h3>
        <p>{totalPackages}</p>
      </div>
      <div className="stat-card">
        <h3>Total Bookings</h3>
        <p>{totalBookings}</p>
      </div>
      <div className="stat-card">
        <h3>Total Revenue</h3>
        <p>${totalRevenue.toFixed(2)}</p>
      </div>
    </div>
  );
}
