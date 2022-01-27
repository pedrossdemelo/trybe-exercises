const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));
app.use('*', (_req, res) => {
  res.status(404).json({error: "No such route"});
})
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});