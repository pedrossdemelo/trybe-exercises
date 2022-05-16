const connection = require("./connection");

module.exports = {
  getFullAdress: async (cep) => {
    const [rows] = await connection.execute(
      `SELECT * FROM ceps WHERE cep = '${cep}'`
    );
    return rows[0];
  },
  postFullAdress: async ({
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
  }) => {
    try {
      await connection.execute(
        `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES ('${cep}', '${logradouro}', '${bairro}', '${localidade}', '${uf}')`
      );
      return [
        {
          cep,
          logradouro,
          bairro,
          localidade,
          uf,
        },
        null,
      ];
    } catch (error) {
      return [null, error];
    }
  },
};
