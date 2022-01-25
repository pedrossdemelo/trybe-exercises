const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (_, res) => {
  res.json({message: 'pong'});
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

app.listen(3001, _ => console.log('Server running on port 3001'));