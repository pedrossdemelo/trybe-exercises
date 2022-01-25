const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (_, res) => {
  res.json({message: 'pong'});
})

app.listen(3001, _ => console.log('Server running on port 3001'));