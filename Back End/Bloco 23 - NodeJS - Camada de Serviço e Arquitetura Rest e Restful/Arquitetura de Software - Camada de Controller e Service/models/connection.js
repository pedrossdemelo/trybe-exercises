const mysql = require("mysql2/promise");

module.exports = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "Big@Ch69",
  database: "cep_lookup"
})

// DATABASE CONFIG:

// CREATE DATABASE IF NOT EXISTS cep_lookup;

// USE cep_lookup;

// CREATE TABLE IF NOT EXISTS ceps (
//   cep VARCHAR(8) NOT NULL PRIMARY KEY,
//   logradouro VARCHAR(50) NOT NULL,
//   bairro VARCHAR(20) NOT NULL,
//   localidade VARCHAR(20) NOT NULL,
//   uf VARCHAR(2) NOT NULL
// );