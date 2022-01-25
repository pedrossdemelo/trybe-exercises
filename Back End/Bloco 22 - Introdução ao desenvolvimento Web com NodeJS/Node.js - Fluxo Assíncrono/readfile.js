const fs = require("fs").promises;

const getHomer = () =>
  fs.readFile("simpsons.json", "utf-8").then((data) => {
    const simpsons = JSON.parse(data);
    const homer = simpsons.find((person) => person.id == 1);
    console.log(homer.name);
  });

const getSimpson = (id) =>
  new Promise((resolve, reject) => {
    fs.readFile("simpsons.json", "utf-8").then((data) => {
      const simpsons = JSON.parse(data);
      const simpson = simpsons.find((person) => person.id == id);
      if (simpson) resolve(simpson);
      else reject(`Id ${id} não encontrado`);
    });
  });

function removeSimpson(...ids) {
  fs.readFile("simpsons.json", "utf-8").then((data) => {
    const simpsons = JSON.parse(data);
    const newSimpsons = simpsons.filter((person) =>
      ids.every((id) => person.id != id)
    );
    fs.writeFile("simpsons.json", JSON.stringify(newSimpsons)).then(() => {
      console.log("Simpson removido");
    });
  });
}

function getSimpsonFamily() {
  fs.readFile("simpsons.json", "utf-8").then((data) => {
    const simpsons = JSON.parse(data);
    const simpsonFamily = simpsons.slice(0, 4);
    fs.writeFile("simpsonFamily.json", JSON.stringify(simpsonFamily)).then(
      () => {
        console.log("Simpson Family criado");
      }
    );
  });
}

function addNelsonMuntz() {
  fs.readFile("simpsonFamily.json", "utf-8").then((data) => {
    const simpsons = JSON.parse(data);
    simpsons.push({
      id: 5,
      name: "Nelson Muntz",
    });
    fs.writeFile("simpsonFamily.json", JSON.stringify(simpsons)).then(() => {
      console.log("Nelson Muntz adicionado");
    });
  });
}

function replaceNelsonForMaggie() {
  fs.readFile("simpsonFamily.json", "utf-8").then((data) => {
    const simpsons = JSON.parse(data);
    const newSimpsons = simpsons.map((person) => {
      if (person.id == 5) person.name = "Maggie Simpson";
      return person;
    });
    fs.writeFile("simpsonFamily.json", JSON.stringify(newSimpsons)).then(() => {
      console.log("Nelson Muntz substituido por Maggie Simpson");
    });
  });
}

// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

//     Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
//     Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
//     Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

const stringArray = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

function writeTofiles(strings) {
  const promises = strings.map((string, index) => {
    return fs.writeFile(`file${index + 1}.txt`, string);
  });
  return Promise.all(promises).then(() => {
    console.log("Arquivos criados");
  });
}

writeTofiles(stringArray);