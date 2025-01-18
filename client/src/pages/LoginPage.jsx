// client/src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // On success, go to dashboard
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mt-5" /* Bootstrap container & margin-top */>
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Form group for Email */}
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email address
          </label>
          <input
            id="loginEmail"
            type="email"
            className="form-control"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Form group for Password */}
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Password
          </label>
          <input
            id="loginPassword"
            type="password"
            className="form-control"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
