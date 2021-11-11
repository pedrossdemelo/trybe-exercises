// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
// Bônus
// As propriedades descritas acima são obrigatórias , mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página.

if (!localStorage.getItem('background')) {
  localStorage.setItem('background', 'default');
  localStorage.setItem('font-color', 'default');
  localStorage.setItem('font-size', 'default');
  localStorage.setItem('line-height', 'default');
  localStorage.setItem('font-family', 'default');
  localStorage.setItem('zoom', 'default');
};

var background = localStorage.getItem('background');
var fontColor = localStorage.getItem('font-color');
var fontSize = localStorage.getItem('font-size');
var lineHeight = localStorage.getItem('line-height');
var fontFamily = localStorage.getItem('font-family');
var zoom = localStorage.getItem('zoom');

if (background === 'changed') {
  document.body.style.backgroundColor = "white";
  document.getElementsByTagName('header')[0].style.backgroundColor = "#FAFAFA";
  document.getElementsByTagName('footer')[0].style.backgroundColor = "#FAFAFA";
  document.getElementById('top-nav').style.backgroundColor = "#FAFAFA";
  document.getElementById('background').classList.add('selected');
}
if (fontColor === 'changed') {
  document.body.style.color = "black";
  const a = document.getElementsByTagName('a');
  [...a].forEach(a => a.style.color = "black");
  document.getElementById('font-color').classList.add('selected');
}
if (fontSize === 'changed') {
  document.getElementById('font-size').classList.add('selected');
  document.body.style.fontSize = "18px";
  document.getElementById('location').style.fontSize = "16px"
}
if (lineHeight === 'changed') {
  document.getElementById('line-height').classList.add('selected');
  document.body.style.lineHeight = "1.5";
}
if (fontFamily === 'changed') {
  document.getElementById('font-family').classList.add('selected');
  document.body.style.fontFamily = "Arial";
  const h1 = document.getElementsByTagName('h1');
  [...h1].forEach(h1 => h1.style.fontFamily = "Times New Roman");
  const h2 = document.getElementsByTagName('h2');
  [...h2].forEach(h2 => h2.style.fontFamily = "Times New Roman");
  const h3 = document.getElementsByTagName('h3');
  [...h3].forEach(h3 => h3.style.fontFamily = "Times New Roman");
  const navItems = document.querySelectorAll('#nav-items li a');
  [...navItems].forEach(navItem => navItem.style.fontFamily = "Times New Roman");
}
if (zoom === 'changed') {
  document.getElementById('zoom').classList.add('selected');
  document.body.style.zoom = "1.1";
}

function setBackground(string) {
  localStorage.setItem('background', string);
}
function setFontColor(string) {
  localStorage.setItem('font-color', string);
}
function setFontSize(string) {
  localStorage.setItem('font-size', string);
}
function setLineHeight(string) {
  localStorage.setItem('line-height', string);
}
function setFontFamily(string) {
  localStorage.setItem('font-family', string);
}
function setZoom(string) {
  localStorage.setItem('zoom', string);
}

function changeBackgroundColor(event) {
  if (event.target.classList.contains('selected')) {
    setBackground('default');
    event.target.classList.remove('selected');
    document.body.style.backgroundColor = "aliceblue";
    document.getElementsByTagName('header')[0].style.backgroundColor = "#EBF4FF";
    document.getElementsByTagName('footer')[0].style.backgroundColor = "#EBF4FF";
    document.getElementById('top-nav').style.backgroundColor = "#EBF4FF";
  } else {
    setBackground('changed');
    event.target.classList.add('selected');
    document.body.style.backgroundColor = "white";
    document.getElementsByTagName('header')[0].style.backgroundColor = "#FAFAFA";
    document.getElementsByTagName('footer')[0].style.backgroundColor = "#FAFAFA";
    document.getElementById('top-nav').style.backgroundColor = "#FAFAFA";
  }
}

document.getElementById('background').addEventListener('click', changeBackgroundColor);

function changeTextColor(event) {
  if (event.target.classList.contains('selected')) {
    setFontColor('default');
    event.target.classList.remove('selected');
    document.body.style.color = "#002652";
    const a = document.getElementsByTagName('a');
    [...a].forEach(a => a.style.color = "#002652");
  } else {
    setFontColor('changed');
    event.target.classList.add('selected');
    document.body.style.color = "black";
    const a = document.getElementsByTagName('a');
    [...a].forEach(a => a.style.color = "black");
  }
}

document.getElementById('font-color').addEventListener('click', changeTextColor);

function changeFontSize(event) {
  if (event.target.classList.contains('selected')) {
    setFontSize('default');
    event.target.classList.remove('selected');
    document.body.style.fontSize = "16px";
    document.getElementById('location').style.fontSize = "14px"
  } else {
    setFontSize('changed');
    event.target.classList.add('selected');
    document.body.style.fontSize = "18px";
    document.getElementById('location').style.fontSize = "16px"
  }
}

document.getElementById('font-size').addEventListener('click', changeFontSize);

function changeLineHeight(event) {
  if (event.target.classList.contains('selected')) {
    setLineHeight('default');
    event.target.classList.remove('selected');
    document.body.style.lineHeight = "1.325";
  } else {
    setLineHeight('changed');
    event.target.classList.add('selected');
    document.body.style.lineHeight = "1.5";
  }
}

document.getElementById('line-height').addEventListener('click', changeLineHeight);

function changeFontFamily(event) {
  if (event.target.classList.contains('selected')) {
    setFontFamily('default');
    event.target.classList.remove('selected');
    document.body.style.fontFamily = "Esteban";
    const h1 = document.getElementsByTagName('h1');
    [...h1].forEach(h1 => h1.style.fontFamily = "Montserrat");
    const h2 = document.getElementsByTagName('h2');
    [...h2].forEach(h2 => h2.style.fontFamily = "Montserrat");
    const h3 = document.getElementsByTagName('h3');
    [...h3].forEach(h3 => h3.style.fontFamily = "Montserrat");
    const navItems = document.querySelectorAll('#nav-items li a');
    [...navItems].forEach(navItem => navItem.style.fontFamily = "Montserrat");
  } else {
    setFontFamily('changed');
    event.target.classList.add('selected');
    document.body.style.fontFamily = "Arial";
    const h1 = document.getElementsByTagName('h1');
    [...h1].forEach(h1 => h1.style.fontFamily = "Times New Roman");
    const h2 = document.getElementsByTagName('h2');
    [...h2].forEach(h2 => h2.style.fontFamily = "Times New Roman");
    const h3 = document.getElementsByTagName('h3');
    [...h3].forEach(h3 => h3.style.fontFamily = "Times New Roman");
    const navItems = document.querySelectorAll('#nav-items li a');
    [...navItems].forEach(navItem => navItem.style.fontFamily = "Times New Roman");
  }
}

document.getElementById('font-family').addEventListener('click', changeFontFamily);

function changeZoom(event) {
  if (event.target.classList.contains('selected')) {
    setZoom('default');
    event.target.classList.remove('selected');
    document.body.style.zoom = 1.0;
  } else {
    setZoom('changed');
    event.target.classList.add('selected');
    document.body.style.zoom = 1.1;
  }
}

document.getElementById('zoom').addEventListener('click', changeZoom);