function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" .
// Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function createDaysOfTheMonth() {
  const daysList = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index++) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.classList.add('day');
    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }
    daysList.appendChild(dayListItem);
  };
}
createDaysOfTheMonth();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidayButton(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidayButton = document.createElement('button');
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);
}
createHolidayButton('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeHolidayColor(event) {
  let holidayDays = document.querySelectorAll('.holiday');
  if (holidayDays[0].style.backgroundColor === 'rgb(255, 0, 0)') {
    for (let index = 0; index < holidayDays.length; index++) {
      holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
    for (let index = 0; index < holidayDays.length; index++) {
      holidayDays[index].style.backgroundColor = 'rgb(255, 0, 0)';
    }
  }
}

document.getElementById('btn-holiday').addEventListener('click', changeHolidayColor);

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const fridayDaysInnerText = ['4', '11', '18', '25'];

function changeFridayText(event) {
  let fridayDays = document.querySelectorAll('.friday');
  if (fridayDays[0].innerText === 'Sextou 🤪') {
    for (let index = 0; index < fridayDays.length; index++) {
      fridayDays[index].innerText = fridayDaysInnerText[index];
    }
  } else {
    for (let index = 0; index < fridayDays.length; index++) {
      fridayDays[index].innerText = 'Sextou 🤪';
    }
  }
}
document.getElementById('btn-friday').addEventListener('click', changeFridayText);

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomIn(event) {
  event.target.style.fontSize = '30px';
}
function zoomOut(event) {
  event.target.style.fontSize = '20px';
}
document.querySelectorAll('.day').forEach(day => {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseout', zoomOut);
});

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addCustomTask(string) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const customTask = document.createElement('span');
  customTask.innerText = string;
  myTasks.appendChild(customTask);
}
addCustomTask('teste');

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addCustomTaskColor(string) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const customTask = document.createElement('div');
  customTask.classList.add('task');
  customTask.style.backgroundColor = string;
  myTasks.appendChild(customTask);
}
addCustomTaskColor('red');

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selectTask(event) {
  const selectedTask = document.querySelector('.task.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}

document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('click', selectTask);
});

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function changeDayColor(event) {
  if (event.target.style.color === document.querySelector('.task.selected').style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = document.querySelector('.task.selected').style.backgroundColor;
  }
}

document.querySelectorAll('.day').forEach(day => {
  day.addEventListener('click', changeDayColor);
});

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .

function addCompromisso(event) {
  if (event.key === 'Enter' || event.type === 'click') {
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementsByClassName('task-list')[0];
    if (taskInput.value.length === 0) {
      alert('Digite um compromisso');
    } else {
      let newTask = document.createElement('li');
      newTask.innerText = taskInput.value;
      taskList.append(newTask);
      taskInput.value = '';
    }
  }
}

document.getElementById('btn-add').addEventListener('click', addCompromisso);
document.getElementById('task-input').addEventListener('keyup', addCompromisso);
