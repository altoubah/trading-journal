import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Some sample data
const sampleData = [
  { date: '2023-06-01', p_l: 200 },
  { date: '2023-06-02', p_l: -100 },
  { date: '2023-06-03', p_l: 300 },
  { date: '2023-06-04', p_l: 150 },
];

export default function AnalyticsPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4" style={{ color: 'var(--color-accent)' }}>Analytics</h1>
      <div style={{ backgroundColor: 'var(--color-card-bg)', padding: '20px' }}>
        <LineChart width={600} height={300} data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="p_l" stroke="#38f" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  );
}
