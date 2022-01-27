const cepModel = require("../models/cepModel");
const validate = require("../middlewares/validate");
const format = require("../middlewares/format");
module.exports = {
  getFullAdress: async (cep) => {
    if (validate.cep(cep) === false)
      return { status: 400, error: { code: "Invalid data", message: "CEP inválido" } };
    const row = await cepModel.getFullAdress(format.cep(cep));
    if (!row)
      return { status: 404, error: { code: "Not found", message: "CEP não encontrado" } };
    row.cep = row.cep.replace(/(\d{5})(\d{3})/, "$1-$2");
    return { status: 200, data: row };
  },
};
