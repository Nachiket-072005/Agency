import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpeg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    alert(`Logging in with Email: ${email}, Remember: ${remember}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <img src={logo} alt="Agency Logo" className="login-logo" />
          <h2>Agency Login</h2>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Don’t have an account?{' '}
          <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>
            Register here
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
