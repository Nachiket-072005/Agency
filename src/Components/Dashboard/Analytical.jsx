// import React from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const data = [
//   { name: "Jan", bookings: 40, revenue: 2400 },
//   { name: "Feb", bookings: 30, revenue: 2210 },
//   { name: "Mar", bookings: 20, revenue: 2290 },
//   { name: "Apr", bookings: 27, revenue: 2000 },
//   { name: "May", bookings: 18, revenue: 2181 },
//   { name: "Jun", bookings: 23, revenue: 2500 },
// ];

// const Analytical = () => {
//   return (
//     <div
//       className="analytical-section"
//       style={{ padding: "20px", background: "#f8f8f8" }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Analytics Overview
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "40px",
//           flexWrap: "wrap",
//           maxWidth: "1000px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Bookings Bar Chart */}
//         <div style={{ flex: "1 1 450px", height: 300 }}>
//           <h4 style={{ textAlign: "center" }}>Monthly Bookings</h4>
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="bookings" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Revenue Line Chart */}
//         <div style={{ flex: "1 1 450px", height: 300 }}>
//           <h4 style={{ textAlign: "center" }}>Monthly Revenue</h4>
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytical;

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";

const Analytical = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const data = [
    { month: "Jan", bookings: 40, revenue: 2500 },
    { month: "Feb", bookings: 30, revenue: 2200 },
    { month: "Mar", bookings: 20, revenue: 2300 },
    { month: "Apr", bookings: 28, revenue: 1950 },
    { month: "May", bookings: 18, revenue: 2100 },
    { month: "Jun", bookings: 23, revenue: 2550 },
  ];

  const handleDownload = () => {
    const chart = document.getElementById("analytics-chart");
    html2canvas(chart).then((canvas) => {
      const link = document.createElement("a");
      link.download = "analytics.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Analytics Overview
      </h2>

      <div className="flex justify-center items-center gap-4 mb-6">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>

        <button
          onClick={handleDownload}
          className="bg-blue-600 text-black px-5 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          Download Chart
        </button>
      </div>

      <div
        id="analytics-chart"
        className="flex flex-col lg:flex-row justify-center items-center gap-10"
      >
        <div className="bg-gray-50 p-4 rounded shadow w-full lg:w-[45%]">
          <h3 className="text-lg text-center mb-2 font-medium">
            Monthly Bookings
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="bookings" fill="mediumpurple" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 p-4 rounded shadow w-full lg:w-[45%]">
          <h3 className="text-lg text-center mb-2 font-medium">
            Monthly Revenue
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="revenue" stroke="mediumseagreen" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytical;
