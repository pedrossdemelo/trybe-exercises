require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hello World';

app.use(express.json());

app.get("/", (req, res) => {
  res.send(MESSAGE);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));