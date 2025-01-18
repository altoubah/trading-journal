import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.png'; // Example image (you might add an image in client/src/assets)

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-white">
        <div className="container d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 text-primary">Master Your Trades</h1>
            <p className="lead">
              Track every move, learn from your mistakes, and conquer the market with ease.
            </p>
            <Link to="/register" className="btn btn-accent btn-lg">
              Get Started for Free
            </Link>
          </div>
          <div className="col-md-6 text-center">
            {/* A placeholder hero image */}
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Choose Our Trading Journal?</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Powerful Analytics</h5>
                  <p className="card-text">
                    Visualize your performance with easy-to-read charts and statistics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Community Forum</h5>
                  <p className="card-text">
                    Share insights, get feedback, and learn from fellow traders in our active forum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Secure & Private</h5>
                  <p className="card-text">
                    Your data is protected with the latest security measures. Journal with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Testimonial placeholder */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="mb-4 text-primary">Join 10,000+ Successful Traders!</h2>
          <p className="mb-4 text-muted">
            "This journal changed my trading game forever." - (Placeholder Testimonial)
          </p>
          <Link to="/register" className="btn btn-accent btn-lg">
            Create My Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
