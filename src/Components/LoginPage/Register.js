import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import "./Register.css";
import logo from "../../logo.jpeg";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    agencyName: "",
    address: "",
    gstNo: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agencyImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "agencyImage") {
      setFormData({ ...formData, agencyImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle form submission (e.g., send to API)
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <header className="login-header">
          <img src={logo} alt="Logo" className="logo" width={50} />
          <h1>Agency Registration</h1>
        </header>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="agencyName">Agency Name: </label>
            <input
              type="text"
              id="agencyName"
              placeholder="Enter your agency name"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleChange}
              required
            />
          </div>

          <label htmlFor="address">Address : </label>
          <textarea
            name="address"
            id="address"
            placeholder="Enter your agency address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="gstNo">GST No.: </label>
          <input
            type="text"
            id="gstNo"
            placeholder="Enter your GST number"
            name="gstNo"
            value={formData.gstNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phNo">Phone Number</label>
          <input
            type="tel"
            id="phNo"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Agency Image</label>
          <input
            type="file"
            id="image"
            name="agencyImage"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="conpass">Confirm Password</label>
          <input
            type="password"
            id="conpass"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Login here
          </Link>
        </p>
      </form>

      <footer className="login-footer">
        <p>© 2025 Your Agency. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span> | </span>
          <Link to="/terms-of-service">Terms of Service</Link>
          <span> | </span>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
