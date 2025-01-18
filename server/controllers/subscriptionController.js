// server/controllers/subscriptionController.js
require('dotenv').config();
const Stripe = require('stripe');
const User = require('../models/User');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  try {
    // We'll assume you created a subscription product & price in Stripe, and you have the price ID
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: 'YOUR_STRIPE_PRICE_ID', // replace with your real Stripe Price ID
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/subscription-success',
      cancel_url: 'http://localhost:3000/subscription-cancel',
      client_reference_id: req.user.userId, // We store user ID here
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating checkout session.' });
  }
};

exports.handleWebhook = async (req, res) => {
  let event;
  const signature = req.headers['stripe-signature'];

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      'YOUR_WEBHOOK_SIGNING_SECRET' // from Stripe Dashboard
    );
  } catch (err) {
    console.error(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout session completion
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id;
    // Mark user subscription as 'pro'
    await User.update({ subscriptionStatus: 'pro' }, { where: { id: userId } });
  }

  res.json({ received: true });
};
