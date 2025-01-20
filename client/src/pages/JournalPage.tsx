import React, { type FC, useState } from 'react';
import TradeEntryForm from '../components/trades/TradeEntryForm';

interface Trade {
  id: string;
  symbol: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice: number;
  size: number;
  pnl: number;
  date: string;
  status: 'OPEN' | 'CLOSED';
  notes?: string;
}

const JournalPage: FC = () => {
  const [isAddingTrade, setIsAddingTrade] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with real data later
  const trades: Trade[] = [
    {
      id: '1',
      symbol: 'AAPL',
      type: 'LONG',
      entryPrice: 180.50,
      exitPrice: 185.75,
      size: 100,
      pnl: 525,
      date: '2024-01-19',
      status: 'CLOSED'
    },
    // Add more sample trades
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent">
          Trade Journal
        </h1>
        <button
          onClick={() => setIsAddingTrade(true)}
          className="px-4 py-2 bg-[#B8860B] hover:bg-[#DAA520] text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/20"
        >
          Add Trade
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#111116] border border-[#B8860B]/20 rounded-lg p-4 flex items-center gap-4">
        <select 
          className="bg-black text-white border border-[#B8860B]/20 rounded-md px-3 py-2 focus:border-[#B8860B] focus:outline-none"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Trades</option>
          <option value="open">Open Trades</option>
          <option value="closed">Closed Trades</option>
        </select>
        <input
          type="text"
          placeholder="Search symbols..."
          className="bg-black text-white border border-[#B8860B]/20 rounded-md px-3 py-2 focus:border-[#B8860B] focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="date"
          className="bg-black text-white border border-[#B8860B]/20 rounded-md px-3 py-2 focus:border-[#B8860B] focus:outline-none"
        />
      </div>

      {/* Trades Table */}
      <div className="bg-[#111116] border border-[#B8860B]/20 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-black/40">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Entry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Exit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">P&L</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#B8860B] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#B8860B]/10">
            {trades.map((trade) => (
              <tr 
                key={trade.id} 
                className="hover:bg-[#B8860B]/5 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-sm text-gray-300">{trade.date}</td>
                <td className="px-6 py-4 text-sm text-white font-medium">{trade.symbol}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                    trade.type === 'LONG' 
                      ? 'bg-green-900/20 text-green-400' 
                      : 'bg-red-900/20 text-red-400'
                  }`}>
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">${trade.entryPrice}</td>
                <td className="px-6 py-4 text-sm text-gray-300">${trade.exitPrice}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{trade.size}</td>
                <td className={`px-6 py-4 text-sm ${
                  trade.pnl >= 0 ? 'text-[#B8860B]' : 'text-red-400'
                }`}>
                  ${Math.abs(trade.pnl)}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                    trade.status === 'OPEN'
                      ? 'bg-blue-900/20 text-blue-400'
                      : 'bg-gray-900/20 text-gray-400'
                  }`}>
                    {trade.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-[#B8860B] hover:text-[#DAA520] transition-colors mr-3">Edit</button>
                  <button className="text-red-400 hover:text-red-300 transition-colors">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Trade Modal */}
      {isAddingTrade && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111116] border border-[#B8860B]/20 rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#B8860B]">Add New Trade</h2>
              <button 
                onClick={() => setIsAddingTrade(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <TradeEntryForm 
              onClose={() => setIsAddingTrade(false)}
              onSubmit={(data) => {
                console.log('Trade submitted:', data);
                setIsAddingTrade(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalPage;