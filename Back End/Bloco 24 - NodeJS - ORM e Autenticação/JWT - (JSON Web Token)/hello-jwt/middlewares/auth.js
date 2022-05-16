require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ statusCode: 401, message: 'Unauthorized' });
  const [, token] = authorization.split(' ');
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next({ statusCode: 401, message: 'Unauthorized' });
    req.credentials = decoded;
    return next();
  });
};