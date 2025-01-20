import React, { type FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01-01', equity: 10000, drawdown: 0 },
  { date: '2024-01-02', equity: 10500, drawdown: 0 },
  { date: '2024-01-03', equity: 10200, drawdown: -300 },
  { date: '2024-01-04', equity: 11000, drawdown: 0 },
  { date: '2024-01-05', equity: 10800, drawdown: -200 },
];

const AnalyticsPage: FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <div className="flex space-x-4">
          <select className="bg-zinc-800 text-white border border-amber-900/20 rounded-lg px-4 py-2">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6">
          <h3 className="text-sm text-gray-400">Profit Factor</h3>
          <p className="text-2xl font-bold text-amber-400 mt-2">2.5</p>
        </div>
        <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6">
          <h3 className="text-sm text-gray-400">Sharpe Ratio</h3>
          <p className="text-2xl font-bold text-amber-400 mt-2">1.8</p>
        </div>
        <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6">
          <h3 className="text-sm text-gray-400">Max Drawdown</h3>
          <p className="text-2xl font-bold text-red-400 mt-2">-12.5%</p>
        </div>
      </div>

      {/* Equity Curve */}
      <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6">
        <h2 className="text-lg font-medium text-white mb-4">Equity Curve</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B',
                  border: '1px solid rgba(217, 119, 6, 0.2)',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="equity" 
                stroke="#D97706" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="drawdown" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;