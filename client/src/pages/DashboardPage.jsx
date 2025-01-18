// client/src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
// Removed: import { useNavigate } from 'react-router-dom';
import { getTrades } from '../services/tradeService'; // hypothetical

export default function DashboardPage() {
  // const navigate = useNavigate(); // removed since we're not using it
  const [trades, setTrades] = useState([]);
  const [summary, setSummary] = useState({
    totalTrades: 0,
    avgWinLoss: 0,
    successRate: 0,
    monthlyPL: 0,
  });

  useEffect(() => {
    fetchTrades();
  }, []);

  async function fetchTrades() {
    try {
      const data = await getTrades(); // your API call
      setTrades(data);

      // compute summary stats (just placeholders for now)
      const total = data.length;
      const success = data.filter((t) => t.exitPrice > t.entryPrice).length;
      const successRate = total ? Math.round((success / total) * 100) : 0;

      setSummary({
        totalTrades: total,
        avgWinLoss: 50, // placeholder
        successRate,
        monthlyPL: 1000, // placeholder
      });
    } catch (err) {
      console.error(err);
      // redirect or show error, if you want
    }
  }

  return (
    <div className="mt-4">
      <h1 className="mb-4 text-primary">Dashboard</h1>

      {/* Summary Cards */}
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Trades</h5>
              <p className="card-text display-6">{summary.totalTrades}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Success Rate</h5>
              <p className="card-text display-6">{summary.successRate}%</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Avg. Win/Loss</h5>
              <p className="card-text display-6">${summary.avgWinLoss}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Monthly P/L</h5>
              <p className="card-text display-6">${summary.monthlyPL}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional chart or recently added trades */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Equity Curve (Placeholder)</h5>
              <p>(You can integrate a chart library here.)</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Trades</h5>
              <ul>
                {trades.slice(0, 5).map((t) => (
                  <li key={t.id}>
                    {t.ticker} - {t.tradeDate} - $
                    {((t.exitPrice - t.entryPrice) * t.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
