// client/src/components/Sidebar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './sidebar.css'; // We'll create this for styling

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      x: 0, // slides in from the left
      transition: { type: 'spring', stiffness: 100 },
    },
    closed: {
      x: '-100%',
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="btn btn-accent toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>

      {/* Motion Sidebar */}
      <motion.div
        className="custom-sidebar bg-dark text-light p-3"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <h3>My Sidebar</h3>
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="text-light">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/forum" className="text-light">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/admin" className="text-light">
              Admin
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
