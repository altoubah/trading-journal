// server/models/User.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
  subscriptionStatus: {
    type: DataTypes.STRING,
    defaultValue: 'free', // can be 'free' or 'pro'
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user'  // can be 'admin' or 'user'
  },  
});

module.exports = User;