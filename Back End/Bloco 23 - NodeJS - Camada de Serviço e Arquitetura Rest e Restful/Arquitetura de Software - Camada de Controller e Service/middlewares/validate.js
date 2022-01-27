module.exports = {
  cep: (cep) => {
    const validCep = /^\d{5}-?\d{3}$/;
    return validCep.test(cep);
  }
}