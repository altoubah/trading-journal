import React, { type FC } from 'react';

interface DayProps {
  date: number;
  trades: number;
  profit: number;
}

const TradeCalendar: FC = () => {
  // Sample data - replace with actual data
  const days: DayProps[] = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    trades: Math.floor(Math.random() * 5),
    profit: Math.random() < 0.7 ? Math.random() * 1000 : -Math.random() * 1000
  }));

  return (
    <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-lg font-medium text-white mb-4">Trade Calendar</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day.date}
            className={`
              aspect-square rounded-lg p-2 flex flex-col items-center justify-center
              ${day.profit > 0 ? 'bg-amber-900/20' : day.profit < 0 ? 'bg-red-900/20' : 'bg-zinc-800/20'}
              ${day.trades > 0 ? 'cursor-pointer hover:bg-opacity-75' : ''}
            `}
          >
            <span className="text-sm text-gray-400">{day.date}</span>
            {day.trades > 0 && (
              <span className={`text-xs mt-1 ${day.profit > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                {day.trades} {day.trades === 1 ? 'trade' : 'trades'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCalendar;