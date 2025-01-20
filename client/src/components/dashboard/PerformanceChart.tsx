import React, { type FC, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DataPoint {
  date: string;
  pnl: number;
  trades: number;
}

const data: DataPoint[] = [
  { date: 'Jan', pnl: 4000, trades: 42 },
  { date: 'Feb', pnl: 3000, trades: 38 },
  { date: 'Mar', pnl: 5000, trades: 45 },
  { date: 'Apr', pnl: 2780, trades: 31 },
  { date: 'May', pnl: 7890, trades: 52 },
  { date: 'Jun', pnl: 6390, trades: 48 },
];

const PerformanceChart: FC = () => {
  const [focusBar, setFocusBar] = useState<string | null>(null);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#15151A] border border-[#B8860B]/20 rounded-lg p-3 shadow-lg">
          <p className="text-[#B8860B] font-medium mb-1">{label}</p>
          <p className="text-[#DAA520]">
            P&L: ${payload[0].value.toLocaleString()}
          </p>
          <p className="text-gray-400">
            Trades: {payload[1].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#111116] border border-[#B8860B]/20 rounded-lg p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[#B8860B]/10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent">
          Performance Overview
        </h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm rounded-md bg-[#1A1A20] text-[#B8860B] hover:bg-[#B8860B]/10 transition-colors">
            1M
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-[#1A1A20] text-[#B8860B] hover:bg-[#B8860B]/10 transition-colors">
            3M
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-[#1A1A20] text-[#B8860B] hover:bg-[#B8860B]/10 transition-colors">
            6M
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-[#1A1A20] text-[#B8860B] hover:bg-[#B8860B]/10 transition-colors">
            1Y
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            onMouseMove={(e: any) => {
              if (e && e.activeLabel) {
                setFocusBar(e.activeLabel);
              } else {
                setFocusBar(null);
              }
            }}
            onMouseLeave={() => setFocusBar(null)}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B8860B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#B8860B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#333"
              vertical={false}
            />
            
            <XAxis 
              dataKey="date" 
              stroke="#666"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: '#333' }}
            />
            
            <YAxis 
              yAxisId="left"
              stroke="#666"
              tick={{ fill: '#666' }}
              tickFormatter={(value) => `$${value}`}
              axisLine={{ stroke: '#333' }}
            />
            
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#666"
              tick={{ fill: '#666' }}
              tickFormatter={(value) => `${value} trades`}
              axisLine={{ stroke: '#333' }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="pnl"
              stroke="#B8860B"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#goldGradient)"
              dot={{ 
                r: 4, 
                fill: '#DAA520',
                strokeWidth: 2,
                stroke: '#B8860B',
                className: 'transition-all duration-300'
              }}
              activeDot={{
                r: 6,
                fill: '#DAA520',
                stroke: '#B8860B',
                strokeWidth: 2,
                className: 'transition-all duration-300'
              }}
            />
            
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="trades"
              stroke="#4A5568"
              strokeWidth={1}
              fill="none"
              dot={{ 
                r: 3, 
                fill: '#4A5568',
                strokeWidth: 1,
                stroke: '#4A5568',
                className: 'transition-all duration-300'
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#B8860B] mr-2" />
          <span className="text-sm text-gray-400">P&L</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#4A5568] mr-2" />
          <span className="text-sm text-gray-400">Trade Count</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;