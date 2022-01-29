require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Está vivo!");
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));