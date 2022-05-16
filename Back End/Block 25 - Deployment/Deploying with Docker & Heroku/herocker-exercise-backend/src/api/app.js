const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.get('/users', rescue(UserController));
app.use(cors());
app.use(errorMiddleware);

module.exports = app;
