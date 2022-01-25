// Para os exercícios abaixo, faremos uso de um módulo chamado readline , principalmente de seu método readline.question() . Ele provê uma interface de leitura de dados inserida no terminal. Para mais informações, consulte a documentação .

//     Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
//         Pergunte à pessoa usuária qual arquivo ela deseja ler.
//         Leia o arquivo indicado.
//         Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
//         Caso o arquivo exista, escreva seu conteúdo na tela.
const fs = require('fs').promises;
const readline = require('readline-sync');

const file = readline.question('What file do you want to read? ');

fs.readFile(`./${file}`, 'utf-8').then((data) => console.log(data)).catch((error) => console.error('File not found'));