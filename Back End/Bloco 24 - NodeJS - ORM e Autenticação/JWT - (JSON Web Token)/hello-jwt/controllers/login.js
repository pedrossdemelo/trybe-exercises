require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  });
  const { error } = schema.validate({ username, password });
  if (error) return next(error);
  const user = await userModel.getByUsername(username);
  if (!user) return next({ statusCode: 404, message: 'User not found' });
  if (user.password !== password) {
    return next({ statusCode: 401, message: 'Wrong password' });
  }
  const JWT = jwt.sign(
    { username, admin: username === 'admin' && password === 's3nh4S3gur4???' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );
  res.json({ JWT });
};
