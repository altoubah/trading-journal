import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Brand / Logo */}
      <Link to="/" className="navbar-brand ms-3">
        {/* Example of a Font Awesome icon + brand text */}
        <i className="fa-solid fa-chart-line me-2"></i>
        TradingJournal (Placeholder)
      </Link>

      {/* Responsive Toggler (Hamburger) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Nav Section */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-3">
          {/* Forum Link */}
          <li className="nav-item">
            <Link to="/forum" className="nav-link">
              <i className="bi bi-chat-dots-fill me-1"></i>
              Forum
            </Link>
          </li>
          {/* Dashboard Link */}
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="fa-solid fa-user-circle me-1"></i>
              Dashboard
            </Link>
          </li>
          {/* Admin Link */}
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <i className="bi bi-shield-lock-fill me-1"></i>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
