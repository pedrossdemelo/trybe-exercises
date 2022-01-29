require('dotenv').config();
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({ statusCode: 400, message: 'Missing username or password' });
  }
  const user = await userModel.getByUsername(username);
  if (!user) return next({ statusCode: 404, message: 'User not found' });
  if (user.password !== password) { return next({ statusCode: 401, message: 'Wrong password' }); }
  const JWT = jwt.sign(
    { username, admin: username === 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );
  res.json({ JWT });
};
