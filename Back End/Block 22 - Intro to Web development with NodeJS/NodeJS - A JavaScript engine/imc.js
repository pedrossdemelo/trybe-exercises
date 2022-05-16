const readline = require("readline-sync");
const calcIMC = (height, weight) => weight / (height * height);
function imc() {
  const height = readline.questionFloat("What's your height in meters? ");
  const weight = readline.questionFloat("What's your weight in kilograms? ");
  const imcTable = `| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |`;
  const response = `Your IMC is ${calcIMC(height, weight).toFixed(1)}`;
  const formattedTable = (imc, imcTable) => {
    const imcClassIndex = (imc) => {
      if (imc < 18.5) return 2;
      if (imc < 25) return 3;
      if (imc < 30) return 4;
      if (imc < 35) return 5;
      if (imc < 40) return 6;
      return 7;
    };
    const classIndex = imcClassIndex(imc);
    let splitTable = imcTable.split("\n");
    return splitTable
      .map((line, index) => {
        if (index === classIndex) return line + " <- You are here";
        return line;
      })
      .join("\n");
  };
  console.log(
    response + "\n" + formattedTable(calcIMC(height, weight), imcTable)
  );
};
imc();
module.exports = imc;
