import React, { type FC } from 'react';

interface Trade {
  id: string;
  symbol: string;
  type: 'LONG' | 'SHORT';
  entry: number;
  exit: number;
  pnl: number;
  date: string;
}

const RecentTrades: FC = () => {
  // Sample data - replace with actual data
  const trades: Trade[] = [
    { id: '1', symbol: 'AAPL', type: 'LONG', entry: 180.50, exit: 185.75, pnl: 525, date: '2024-01-19' },
    { id: '2', symbol: 'TSLA', type: 'SHORT', entry: 220.00, exit: 215.50, pnl: 450, date: '2024-01-18' },
    { id: '3', symbol: 'MSFT', type: 'LONG', entry: 375.25, exit: 372.50, pnl: -275, date: '2024-01-18' },
  ];

  return (
    <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="p-6 border-b border-amber-900/20">
        <h2 className="text-lg font-medium text-white">Recent Trades</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black/20">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Entry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Exit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">P&L</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {trades.map((trade) => (
              <tr key={trade.id} className="hover:bg-black/20">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{trade.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    trade.type === 'LONG' ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
                  }`}>
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${trade.entry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${trade.exit}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${trade.pnl > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                  ${Math.abs(trade.pnl)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{trade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTrades;