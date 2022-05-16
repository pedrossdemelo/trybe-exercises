function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('a', '1')
      .replace('e', '2')
      .replace('i', '3')
      .replace('o', '4')
      .replace('u', '5');
  }
  return string;
}
function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('1', 'a')
      .replace('2', 'e')
      .replace('3', 'i')
      .replace('4', 'o')
      .replace('5', 'u');
  }
  return string;
}

module.exports = {
  encode,
  decode,
};