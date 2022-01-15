import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-slate-50'>
      <Header />
      <Routes>
        {/* <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/clients' component={Clients} />
        <Route path='/clients/register' component={ClientRegister} /> */}
      </Routes>
    </div>
  );
}

export default App;
