import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.png'; // ensure you have an image

export default function LandingPage() {
  return (
    <div className="container-fluid py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <motion.h1
            className="mb-4"
            style={{ fontSize: '3rem', color: 'var(--color-accent)' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master Your Trades
          </motion.h1>
          <motion.p
            className="lead mb-4"
            style={{ color: '#fff' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A seamless, dark-themed platform to track, analyze, and enhance your performance.
          </motion.p>
          <Link to="/register" className="btn btn-accent btn-lg">
            Get Started for Free
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <motion.img
            src={heroImage}
            alt="Hero"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <i className="fa-solid fa-chart-line fa-2x mb-2" style={{ color: 'var(--color-accent)' }}></i>
          <h3 style={{ color: '#fff' }}>Powerful Analytics</h3>
          <p className="text-muted">
            Visualize your performance with easy-to-read charts and statistics.
          </p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-chat-dots-fill fa-2x mb-2" style={{ color: 'var(--color-accent)' }}></i>
          <h3 style={{ color: '#fff' }}>Community Forum</h3>
          <p className="text-muted">
            Share insights, get feedback, and learn from fellow traders in our active forum.
          </p>
        </div>
        <div className="col-md-4">
          <i className="fa-solid fa-lock fa-2x mb-2" style={{ color: 'var(--color-accent)' }}></i>
          <h3 style={{ color: '#fff' }}>Secure & Private</h3>
          <p className="text-muted">
            Your data is protected with the latest security measures. Journal with confidence.
          </p>
        </div>
      </div>

      {/* CTA or Testimonial Section */}
      <div className="text-center mt-5">
        <h2 className="mb-3" style={{ color: 'var(--color-accent)' }}>
          Join 10,000+ Successful Traders!
        </h2>
        <p className="text-muted mb-4">
          "This journal changed my trading game forever." - (Placeholder Testimonial)
        </p>
        <Link to="/register" className="btn btn-accent btn-lg">
          Create My Free Account
        </Link>
      </div>
    </div>
  );
}
