const cepModel = require("../models/cepModel");
const validate = require("../middlewares/validate");
const format = require("../middlewares/format");
const Joi = require("joi");
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
  postFullAdress: async ({ cep, logradouro, bairro, localidade, uf }) => {
    const schema = Joi.object({
      cep: Joi.string().regex(/^\d{5}-?\d{3}$/).required(),
      logradouro: Joi.string().required(),
      bairro: Joi.string().required(),
      localidade: Joi.string().required(),
      uf: Joi.string().regex(/^[A-Z]{2}$/).required(),
    });
    const { invalidInput } = schema.validate({ cep, logradouro, bairro, localidade, uf });
    if (invalidInput) return { status: 400, error: { code: "Invalid data", message: invalidInput.details[0].message } };
    const [row, error] = await cepModel.postFullAdress({
      cep: format.cep(cep),
      logradouro,
      bairro,
      localidade,
      uf,
    });
    if (error && error.code === "ER_DUP_ENTRY")
      return { status: 409, error: { code: "Duplicate entry", message: "CEP já cadastrado" } };
    return { status: 201, data: row };
  }
};
