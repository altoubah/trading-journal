import React, { type FC, useState } from 'react';

interface TradeFormProps {
  onClose: () => void;
  onSubmit: (data: TradeFormData) => void;
}

interface TradeFormData {
  symbol: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice: number;
  size: number;
  date: string;
  notes?: string;
}

const TradeEntryForm: FC<TradeFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<TradeFormData>({
    symbol: '',
    type: 'LONG',
    entryPrice: 0,
    exitPrice: 0,
    size: 0,
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Your form fields here */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Symbol
          </label>
          <input
            type="text"
            value={formData.symbol}
            onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
            className="w-full bg-black text-white border border-[#B8860B]/20 rounded-lg px-4 py-2.5 focus:border-[#B8860B] focus:outline-none"
            required
          />
        </div>
        {/* Add other form fields similarly */}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#B8860B] hover:bg-[#DAA520] text-black font-medium rounded-lg transition-all duration-300"
        >
          Save Trade
        </button>
      </div>
    </form>
  );
};

export default TradeEntryForm;