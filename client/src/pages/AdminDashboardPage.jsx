// client/src/pages/AdminDashboardPage.jsx
import React, { useEffect, useState } from 'react';

export default function AdminDashboardPage() {
  const [users, setUsers] = useState([]);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchTrades();
  }, []);

  async function fetchUsers() {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3001/api/admin/users', {
        headers: { Authorization: token },
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchTrades() {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3001/api/admin/trades', {
        headers: { Authorization: token },
      });
      const data = await res.json();
      setTrades(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container-fluid mt-5">
      <h1 className="mb-4" style={{ color: 'var(--color-accent)' }}>
        <i className="bi bi-speedometer2 me-2"></i>
        Admin Dashboard
      </h1>

      {/* Summary row */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center p-3" style={{ minHeight: '150px' }}>
            <h5>
              <i className="fa-solid fa-users me-2"></i>
              Total Users
            </h5>
            <h2 style={{ color: 'var(--color-accent)' }}>{users.length}</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3" style={{ minHeight: '150px' }}>
            <h5>
              <i className="bi bi-bar-chart-line me-2"></i>
              Total Trades
            </h5>
            <h2 style={{ color: 'var(--color-accent)' }}>{trades.length}</h2>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card mb-5">
        <div className="card-header" style={{ borderBottom: '1px solid var(--color-card-border)' }}>
          <h4>
            <i className="bi bi-people-fill me-2"></i>
            All Users
          </h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Trades Table */}
      <div className="card">
        <div className="card-header" style={{ borderBottom: '1px solid var(--color-card-border)' }}>
          <h4>
            <i className="bi bi-cash-stack me-2"></i>
            All Trades
          </h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Date</th>
                  <th>Entry Price</th>
                  <th>Exit Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t) => (
                  <tr key={t.id}>
                    <td>{t.ticker}</td>
                    <td>{t.tradeDate}</td>
                    <td>${t.entryPrice}</td>
                    <td>${t.exitPrice}</td>
                    <td>{t.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
