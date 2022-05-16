import React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 receba `animal` e `onAnimalChange` como  props nesse componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 apague essa parte, já que agora ela será gerenciada no App.js
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 descomente esse trecho
function Display({name = "fulano", animal = "cachorro"}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

// 💣 substitua esse componente pelo que foi descomentado acima
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function App() {
  // 🐨 inclua um useState para o 'animal'
  const [animal, setAnimal] = React.useState();
  const [name, setName] = React.useState();
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 passe o animal e onAnimalChange como props aqui (semelhante ao que foi feito anteriormente no componente Name acima) */}
      <FavoriteAnimal onAnimalChange={event => setAnimal(event.target.value)} animal={animal}/>
      {/* 🐨 passe a prop animal aqui */}
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default App