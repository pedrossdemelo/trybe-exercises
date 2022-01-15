import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Clients from './components/Clients';
import ClientRegister from './components/ClientRegister';
function App() {
  return (
    <div className='flex flex-col h-screen overflow-x-hidden bg-slate-50'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/clients' element={<Clients/>} />
        <Route path='/clients/register' element={<ClientRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
