// server/middleware/adminAuth.js
require('dotenv').config();

module.exports = (req, res, next) => {
  // We assume we already have `req.user` set by your existing `auth.js` middleware.
  // If not, you'd first ensure they're logged in. (auth.js does that.)
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated.' });
  }

  // Check if user is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden. Admins only.' });
  }

  // If we pass this check, go to next
  next();
};
