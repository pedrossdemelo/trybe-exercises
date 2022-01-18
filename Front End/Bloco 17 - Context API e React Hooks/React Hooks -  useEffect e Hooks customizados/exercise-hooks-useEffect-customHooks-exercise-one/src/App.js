import React, { createContext} from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';

const Context = createContext();
export const { Provider, Consumer } = Context;

export default function App() {
  return (
    <div className="App">
      <Selector />
      <Posts />
    </div>
  );
};