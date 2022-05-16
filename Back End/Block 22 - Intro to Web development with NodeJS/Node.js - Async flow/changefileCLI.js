// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.

const readline = require("readline-sync");
const fs = require("fs").promises;

const fileChosen = readline.question("What file do you want to change? ");

fs.readFile(`./${fileChosen}`, "utf-8")
  .then((data) => {
    const words = data.split(" ");
    const wordToReplace = readline.question(
      "What word do you want to replace? "
    );
    const newWord = readline.question("What is the new word? ");
    const updatedContent = words
      .map((word) => {
        if (word === wordToReplace) word = newWord;
        return word;
      })
      .join(" ");
    console.log("Here's a sneak peek: \n" + updatedContent);
    const newPath = readline.question("Where do you want to save the file? ");
    fs.writeFile(newPath, updatedContent)
      .then(() => console.log("File saved!"))
      .catch((error) => console.error("Error saving file: " + error));
  })
  .catch((error) => console.error("File not found"));
