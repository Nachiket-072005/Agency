import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/LoginPage/Register"; // make sure this exists
import DashboardPage from "./Components/Dashboard/NewDashboard";

function App() {
  return (
    <div className="App">
      {/* Uncomment Navbar and Footer if you want them on all pages */}
      {/* <Navbar
          first="Home"
          second="Packages"
          third="Offers"
          fourth="Travel Guide"
          fifth="Feature"
        /> */}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add other routes here */}
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
