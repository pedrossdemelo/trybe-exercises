const returnName = (name) => name;

const newEmployees = (f) => {
  const employees = {
    id1: f('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: f('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: f('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(returnName));

const isWinner = (num, randomNumber) => num === randomNumber;

const giveaway = (num, f) => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  return f(num, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(giveaway(3, isWinner));