// server/routes/tradeRoutes.js
const express = require('express');
const { createTrade, getTrades, updateTrade, deleteTrade } = require('../controllers/tradeController');
const auth = require('../middleware/auth');

const router = express.Router();

// Protected routes (must be logged in)
router.post('/', auth, createTrade);
router.get('/', auth, getTrades);
router.put('/:id', auth, updateTrade);
router.delete('/:id', auth, deleteTrade);

module.exports = router;
