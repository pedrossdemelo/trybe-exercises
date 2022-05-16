function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  return array.sort().map((tech) => ({ tech, name }));
}

module.exports = techList;