import React, { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Create Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black text-white border border-amber-900/20 rounded-lg px-4 py-2.5"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black text-white border border-amber-900/20 rounded-lg px-4 py-2.5"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black text-white border border-amber-900/20 rounded-lg px-4 py-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2.5 rounded-lg transition-colors"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-400 hover:text-amber-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;