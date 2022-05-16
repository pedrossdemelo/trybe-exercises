require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/login', controllers.login);

app.get('/users/me', middlewares.auth, (req, res) => {
  const { username, admin } = req.credentials;
  res.json({ username, admin });
});

app.get('/top-secret', middlewares.auth, (req, res) => {
  const { admin } = req.credentials;
  return admin
    ? res.json({ secretInfo: 'Peter Parker is Spiderman' })
    : res.status(403).json({ message: 'Forbidden' });
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
