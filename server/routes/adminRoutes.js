// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();

// We'll import your existing auth and new adminAuth
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// We also import your models if we want direct access:
const User = require('../models/User');
const Trade = require('../models/Trade');
// etc.

// GET all users (ADMIN only)
router.get('/users', auth, adminAuth, async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error fetching users.' });
  }
});

// GET all trades (ADMIN only)
router.get('/trades', auth, adminAuth, async (req, res) => {
  try {
    const trades = await Trade.findAll();
    return res.json(trades);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error fetching trades.' });
  }
});

// Add more admin endpoints as needed

module.exports = router;
