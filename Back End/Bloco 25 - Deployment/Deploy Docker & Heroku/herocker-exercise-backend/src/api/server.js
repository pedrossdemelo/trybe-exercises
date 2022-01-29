require('dotenv').config();
const app = require('./app');
const UserController = require('../controllers/user');

app.get('/users', UserController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
