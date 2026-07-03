const jwt = require('jsonwebtoken');
const User = require('../models/User');
const transporter = require('../config/email');

const register = async (req, res) => {
  try {
    const { fullname, email, phone, password, country } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User exists' });
    user = new User({ fullname, email, phone, password, country });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ success: true, token, user: { id: user._id, fullname, email } });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) return res.status(401).json({ error: 'Invalid' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id: user._id, fullname: user.fullname, email } });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const logout = (req, res) => { res.json({ success: true }); };

const refreshToken = (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'Token required' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Invalid' });
      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      res.json({ success: true, token: newToken });
    });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { register, login, logout, refreshToken };
