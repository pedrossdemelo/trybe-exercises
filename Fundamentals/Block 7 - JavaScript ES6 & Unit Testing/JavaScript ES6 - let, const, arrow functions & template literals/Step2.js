const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

console.log(factorial(4));

const longestWord = str => str.split(' ').reduce((acc, word) => word.length > acc.length ? word : acc);

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

const replaceX = str => `Tryber ${str} aqui!`;

console.log(replaceX("Bebeto"));

const skills = ["Javascript", "ReactJS", "React Native", "NodeJS", "MongoDB"];

const addSkills = (skArr, str) => `${str} Minha cinco principais habilidades são:\r\n${skArr.sort().slice(0, skArr.length).join('\r\n')}`;

console.log(addSkills(skills, replaceX("Pedro")));