const mysql = require("mysql2/promise");

module.exports = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "Big@Ch69",
  database: "user_exercise",
});

// DATABASE CONFIGURATION:

// CREATE DATABASE user_exercise;

// USE user_exercise;

// CREATE TABLE users (
// 	id INT NOT NULL AUTO_INCREMENT,
//     first_name VARCHAR(30) NOT NULL,
//     last_name VARCHAR(30) NOT NULL,
//     email VARCHAR(50) NOT NULL,
//     `password` VARCHAR(15) NOT NULL,
//     PRIMARY KEY(id)
// );

// INSERT INTO users (first_name, last_name, email, `password`)
// VALUES ('Pedro', 'Sousa', 'pedrossm2000@gmail.com', 'bigchungus');
