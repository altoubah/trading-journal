// server/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');

// Import models so they get synced
const User = require('./models/User');
const Trade = require('./models/Trade');
const Post = require('./models/Post');

// Import routes
const authRoutes = require('./routes/authRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const postRoutes = require('./routes/postRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/admin', adminRoutes);

// Test endpoint
app.get('/', (req, res) => {
  res.send('Trading Journal MVP API is running.');
});

// Sync DB and start server
db.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully.');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
