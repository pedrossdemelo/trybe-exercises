import React from 'react';
import './App.css';

const Task = ({value}) => {
  return (
    <p>{value}</p>
  );
}

const conteudos = [
  "Regar plantas",
  "Lavar pratos",
  "Limpar banheiro",
  "Lavar roupa",
  "Lavar louça"
];

function App() {
  return (
    <div className="App">
      <ul>
        {conteudos.map(conteudo => (
          <Task value={conteudo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
