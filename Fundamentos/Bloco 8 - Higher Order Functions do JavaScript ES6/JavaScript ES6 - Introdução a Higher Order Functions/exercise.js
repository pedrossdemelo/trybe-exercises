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

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalPoints = (correctAnswers, answers) => {
  let points = 0;
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) points++;
    if (answer === 'N.A') points += 0;
    if (answer !== correctAnswers[index] && answer !== 'N.A') points-= 0.5;
  });
  return points > 0 ? points : 0;
}

const evaluate = (correctAnswers, answers, validation) => validation(correctAnswers, answers);

console.log(evaluate(RIGHT_ANSWERS, STUDENT_ANSWERS, totalPoints));