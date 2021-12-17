import React from 'react';
import './App.css';

const Task = ({value}) => {
  return (
    <p>{value}</p>
  );
}

function App() {
  return (
    <div className="App">
      <ul>
        <Task value="Hello World" />
      </ul>
    </div>
  );
}

export default App;
