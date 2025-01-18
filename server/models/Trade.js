// server/models/Trade.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');

const Trade = db.define('Trade', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  ticker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entryPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  exitPrice: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tradeDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Relationship: A User has many Trades
User.hasMany(Trade, { onDelete: 'CASCADE' });
Trade.belongsTo(User);

module.exports = Trade;