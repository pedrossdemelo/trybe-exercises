const express = require('express');
const app = express();
const rescue = require('express-rescue');
const userRouter = require('./user');
const errorMiddleware = require('./errorMiddleware');
app.use(express.json());
app.use('/user', userRouter);
app.use(errorMiddleware)
app.listen(3001, () => console.log('Server running on port 3001'));