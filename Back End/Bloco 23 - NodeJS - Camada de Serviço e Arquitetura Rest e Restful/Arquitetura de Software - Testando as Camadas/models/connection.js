const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'Big@Ch69',
  database: 'model_example'});

module.exports = connection;