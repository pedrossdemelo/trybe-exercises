const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'Big@Ch69',
  database: 'rest_exercicios'});

module.exports = connection;