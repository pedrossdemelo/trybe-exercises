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

function changeBackgroundColor() {
    document.body.style.backgroundColor = "white";
    document.getElementsByTagName('header')[0].style.backgroundColor = "#FAFAFA";
    document.getElementsByTagName('footer')[0].style.backgroundColor = "#FAFAFA";
    document.getElementById('top-nav').style.backgroundColor = "#FAFAFA";
}

changeBackgroundColor();

function changeTextColor() {
  document.body.style.color = "red";
  const a = document.getElementsByTagName('a');
  [...a].forEach(a => a.style.color = "red");
}

changeTextColor();

function changeFontSize() {
  // default is 16px
  document.body.style.fontSize = "18px";
  // default is 14px
  document.getElementById('location').style.fontSize = "16px"
}

changeFontSize();

function changeLineHeight() {
  // default is 1.3
  document.body.style.lineHeight = "1.3";
}

changeLineHeight();

function changeFontFamily() {
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

changeFontFamily();