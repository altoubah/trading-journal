import React, { type FC } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard: FC<StatCardProps> = ({ title, value, change, isPositive }) => (
  <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6 backdrop-blur-sm">
    <p className="text-sm text-gray-400">{title}</p>
    <div className="mt-2 flex items-baseline justify-between">
      <p className="text-2xl font-semibold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
        {value}
      </p>
      <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  </div>
);

const DashboardStats: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total P&L"
        value="$24,567"
        change="+12.5%"
        isPositive={true}
      />
      <StatCard
        title="Win Rate"
        value="68.5%"
        change="+2.3%"
        isPositive={true}
      />
      <StatCard
        title="Avg Trade"
        value="$234"
        change="-1.2%"
        isPositive={false}
      />
      <StatCard
        title="Total Trades"
        value="156"
        change="+23"
        isPositive={true}
      />
    </div>
  );
};

export default DashboardStats;