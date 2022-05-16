module.exports = {
  cep: (cep) => cep.length === 9 ? cep.replace(/-/g, '') : cep,
}