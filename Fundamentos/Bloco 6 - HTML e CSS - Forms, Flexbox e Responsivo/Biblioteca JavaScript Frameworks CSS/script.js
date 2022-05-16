function addEstados() {
  let states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];
  let statesAcronyms = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];
  let selectState = document.getElementById('estado');
  for (let index = 0; index < states.length; index++) {
      let option = document.createElement('option');
      option.innerHTML = states[index];
      option.value = statesAcronyms[index];
      selectState.appendChild(option);
  }
}

addEstados();

function areFieldsFilled() {
  let result = true;
  let inputs = document.querySelectorAll('input');
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value === '') {
      result = false;
      break;
    }
  }
  return result;
}

function printResult() {
  let div = document.createElement('div');
  div.classList.add('printForm');
  div.classList.add('container-sm');
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let endereco = document.getElementById('endereco').value;
  let cidade = document.getElementById('cidade').value;
  let estado = document.getElementById('estado').value;
  let tipo = document.getElementById('tipo').value;
  let resumo = document.getElementById('resumo').value;
  let cargo = document.getElementById('cargo').value;
  let descricao = document.getElementById('descricao').value;
  let data = document.getElementById('datepicker').value;
  let divDados = document.createElement('div');
  if (areFieldsFilled()) {
    divDados.innerHTML = `
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>CPF: ${cpf}</p>
      <p>Endereço: ${endereco}</p>
      <p>Cidade: ${cidade}</p>
      <p>Estado: ${estado}</p>
      <p>Tipo: ${tipo}</p>
      <p>Resumo: ${resumo}</p>
      <p>Cargo: ${cargo}</p>
      <p>Descrição: ${descricao}</p>
      <p>Data: ${data}</p>
    `;
    div.appendChild(divDados);
    document.body.appendChild(div);
  }
}

document.getElementById('print').addEventListener('click', printResult);

function removeDivs() {
  let divs = document.querySelectorAll('.printForm');
  for (let index = 0; index < divs.length; index++) {
    divs[index].remove();
  }
}

document.getElementById('reset').addEventListener('click', removeDivs);