const connection = require('./connection');

module.exports = {
  getFullAdress: async (cep) => {
    const [rows] = await connection.execute(`SELECT * FROM ceps WHERE cep = '${cep}'`);
    return rows[0];
  }
}