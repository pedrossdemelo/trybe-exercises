// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs').promises;

const getHomer = () => fs.readFile('simpsons.json', 'utf-8').then((data) => {
  const simpsons = JSON.parse(data);
  const homer = simpsons.find((person) => person.id == 1);
  console.log(homer.name);
});

const getSimpson = (id) => new Promise((resolve, reject) => {
  fs.readFile('simpsons.json', 'utf-8').then((data) => {
    const simpsons = JSON.parse(data);
    const simpson = simpsons.find((person) => person.id == id);
    if (simpson) resolve(simpson);
    else reject(`Id ${id} não encontrado`);
  });
})

function removeSimpson(...ids) {
  fs.readFile('simpsons.json', 'utf-8').then((data) => {
    const simpsons = JSON.parse(data);
    const newSimpsons = simpsons.filter((person) => ids.every((id) => person.id != id));
    fs.writeFile('simpsons.json', JSON.stringify(newSimpsons)).then(() => {
      console.log('Simpson removido');
    });
  });
}
