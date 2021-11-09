let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

function averageArrayBiggerThan20(array) {
  let average = average(array);
  if (average > 20) {
    console.log("valor maior que 20");
  } else {
    console.log("valor menor ou igual a 20");
  }
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

function biggerValue(array) {
  let bigger = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }
  return bigger;
}

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

function countOdd(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
    }
  }
  if (count === 0) {
    console.log("nenhum valor ímpar encontrado");
  } else {
    console.log(count);
  }
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

function smallerValue(array) {
  let smaller = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smaller) {
      smaller = array[i];
    }
  }
  return smaller;
}

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

function createAndLog1to25Array() {
  let array = [];
  for (let i = 0; i < 25; i++) {
    array.push(i + 1);
  }
  console.log(array);
  return array;
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

function divideElementsBy2(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] / 2;
  }
  console.log(array);
  return array;
}

// Bonus
// Ordene o array numbers em ordem crescente e imprima seus valores;

function sortArray(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);
  return array;
}

// Ordene o array numbers em ordem decrescente e imprima seus valores;

function sortArrayDescending(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  console.log(array);
  return array;
}

