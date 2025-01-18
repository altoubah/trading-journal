import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap global styles
import './theme.css';

// Import your pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ForumPage from './pages/ForumPage';
import SubscriptionSuccessPage from './pages/SubscriptionSuccessPage';
import SubscriptionCancelPage from './pages/SubscriptionCancelPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LandingPage from './pages/LandingPage';
import AnalyticsPage from './pages/AnalyticsPage';

// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      {/* The Header is displayed at the top of every page */}
      <Header />

      {/* Use a Bootstrap container (adds left/right margin on large screens) */}
      <div className="container mt-4">
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route
            path="/subscription-success"
            element={<SubscriptionSuccessPage />}
          />
          <Route
            path="/subscription-cancel"
            element={<SubscriptionCancelPage />}
          />

          {/* Admin route */}
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </div>

      {/* The Footer is displayed at the bottom of every page */}
      <Footer />
    </Router>
  );
}

export default App;
