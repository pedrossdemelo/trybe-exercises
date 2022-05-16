function hydrate(string) {
  let cups = string.match(/\d+/g).reduce((prev, curr) => prev + Number(curr), 0);
  return `${cups} copo${cups > 1 ? 's' : ''} de água`;
}

module.exports = hydrate;