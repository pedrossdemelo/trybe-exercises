// add all brazillian states as options to the element with id 'estado'
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

function handleSubmit(event) {
  let data = document.getElementById('data');
  if (data.value === '') {
    alert('Preencha o campo data');
  }
  let dataSplit = data.value.split('/');
  let dia = Number(dataSplit[0]);
  let mes = Number(dataSplit[1]);
  let ano = Number(dataSplit[2]);
  let dataValida = true;
  console.log(dia, mes, ano);
  if (dia < 1 || dia > 31 || !dia) {
    dataValida = false;
  }
  if (mes < 1 || mes > 12 || !mes) {
    dataValida = false;
  }
  if (ano < 0 || !ano) {
    dataValida = false;
  }
  if (!dataValida) {
    alert('Data inválida');
  }
}

document.getElementById('submit').addEventListener('click', handleSubmit);