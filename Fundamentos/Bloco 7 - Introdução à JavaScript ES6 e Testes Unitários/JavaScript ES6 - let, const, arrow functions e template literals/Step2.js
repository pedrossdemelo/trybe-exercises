const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

console.log(factorial(4));

const longestWord = str => str.split(' ').reduce((acc, word) => word.length > acc.length ? word : acc);

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

const replaceX = (str, newStr) => str.replace(/ x /g, ` ${newStr} `);

console.log(replaceX("Tryber x aqui!", "Bebeto"));