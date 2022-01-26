const express = require('express');
const app = express();
const rescue = require('express-rescue');
const userRouter = require('./routes/user');
const btcRouter = require('./routes/btc');
const errorMiddleware = require('./errorMiddleware');
app.use(express.json());
app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use(errorMiddleware)
app.listen(3001, () => console.log('Server running on port 3001'));