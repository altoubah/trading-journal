// server/routes/subscriptionRoutes.js
const express = require('express');
const { createCheckoutSession, handleWebhook } = require('../controllers/subscriptionController');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a checkout session (for upgrading to Pro)
router.post('/create-checkout-session', auth, createCheckoutSession);

// Stripe webhook to listen for subscription updates
// Must use express.raw for the body parser on webhooks
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;
