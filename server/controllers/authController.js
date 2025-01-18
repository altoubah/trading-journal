// server/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user
    await User.create({ email, password: hashedPassword });

    return res.json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Compare passwords
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Create JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({
      message: 'Login successful.',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        subscriptionStatus: user.subscriptionStatus,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error.' });
  }
};
