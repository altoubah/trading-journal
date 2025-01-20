// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AnalyticsPage from './pages/AnalyticsPage';
import DashboardPage from './pages/DashboardPage';
import JournalPage from './pages/JournalPage';
import CommunityPage from './pages/CommunityPage';
import PricingPage from './pages/subscription/PricingPage';

const App: React.FC = () => {
  // For now, we'll keep everyone logged in. Later we'll add proper auth logic
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* Public Routes - Don't need authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Protected Routes - Need authentication */}
        <Route path="/" element={
          <Layout>
            <DashboardPage />
          </Layout>
        } />
        <Route path="/journal" element={
          <Layout>
            <JournalPage />
          </Layout>
        } />
        <Route path="/analytics" element={
          <Layout>
            <AnalyticsPage />
          </Layout>
        } />
        <Route path="/community" element={
          <Layout>
            <CommunityPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;