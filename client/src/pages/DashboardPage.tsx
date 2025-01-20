import React, { type FC, useState } from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import TradeCalendar from '../components/dashboard/TradeCalendar';
import RecentTrades from '../components/dashboard/RecentTrades';
import TradeEntryForm from '../components/trades/TradeEntryForm';

interface TradeFormData {
  symbol: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice: number;
  size: number;
  date: string;
  notes?: string;
}

const DashboardPage: FC = () => {
  const [isAddingTrade, setIsAddingTrade] = useState<boolean>(false);

  const handleTradeSubmit = (data: TradeFormData) => {
    // Here you'll handle the trade submission
    console.log('Trade submitted:', data);
    setIsAddingTrade(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent">
          Dashboard
        </h1>
        <button 
          onClick={() => setIsAddingTrade(true)}
          className="px-4 py-2 bg-[#B8860B] hover:bg-[#DAA520] text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/20"
        >
          New Trade
        </button>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Main Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <TradeCalendar />
      </div>

      {/* Recent Trades */}
      <RecentTrades />

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
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            <TradeEntryForm 
              onClose={() => setIsAddingTrade(false)}
              onSubmit={handleTradeSubmit}
            />
          </div>
        </div>
      )}

      {/* Success Notification - can be shown when trade is added */}
      {/* 
      <div className="fixed bottom-4 right-4 bg-[#111116] border border-[#B8860B]/20 rounded-lg p-4 shadow-lg">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-white">Trade added successfully!</p>
        </div>
      </div>
      */}
    </div>
  );
};

export default DashboardPage;