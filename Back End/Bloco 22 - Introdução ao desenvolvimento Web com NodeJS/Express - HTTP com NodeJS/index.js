const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (_, res) => {
  res.json({message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello ${name}` });
  return res.status(401).json({ message: "Unauthorized" });
});

app.listen(3001, _ => console.log('Server running on port 3001'));