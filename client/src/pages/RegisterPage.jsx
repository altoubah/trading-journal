// client/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed. Email may already be in use.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Email field */}
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email address
          </label>
          <input
            id="registerEmail"
            type="email"
            className="form-control"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password field */}
        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>
          <input
            id="registerPassword"
            type="password"
            className="form-control"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}
