// server/controllers/tradeController.js
const Trade = require('../models/Trade');

exports.createTrade = async (req, res) => {
  try {
    const { ticker, entryPrice, exitPrice, quantity, tradeDate, notes } = req.body;
    const newTrade = await Trade.create({
      ticker,
      entryPrice,
      exitPrice,
      quantity,
      tradeDate,
      notes,
      UserId: req.user.userId,
    });
    return res.json(newTrade);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.getTrades = async (req, res) => {
  try {
    const trades = await Trade.findAll({
      where: { UserId: req.user.userId },
      order: [['tradeDate', 'DESC']],
    });
    return res.json(trades);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.updateTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findByPk(id);

    if (!trade) {
      return res.status(404).json({ message: 'Trade not found.' });
    }
    if (trade.UserId !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    const updated = await trade.update(req.body);
    return res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.deleteTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findByPk(id);

    if (!trade) {
      return res.status(404).json({ message: 'Trade not found.' });
    }
    if (trade.UserId !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    await trade.destroy();
    return res.json({ message: 'Trade deleted.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};
