// client/src/pages/TradesPage.jsx
import React, { useEffect, useState } from 'react';
import { getTrades } from '../services/tradeService';

export default function TradesPage() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchTrades();
  }, []);

  async function fetchTrades() {
    try {
      const data = await getTrades();
      setTrades(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">My Trades</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>Quantity</th>
            <th>P/L</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => {
            const pl = (trade.exitPrice - trade.entryPrice) * trade.quantity;
            return (
              <tr key={trade.id}>
                <td>{trade.ticker}</td>
                <td>${trade.entryPrice}</td>
                <td>${trade.exitPrice}</td>
                <td>{trade.quantity}</td>
                <td
                  style={{
                    color: pl >= 0 ? 'green' : 'red',
                  }}
                >
                  ${pl.toFixed(2)}
                </td>
                <td>{trade.tradeDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
