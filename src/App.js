

import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Register from './components/register/Register';
import Login from './components/register/Login';
import Home from './components/home_/Home';


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/register' element = {<Register />} />
        </Routes>
      </BrowserRouter>
      
      
   </>
  );
}

export default App;
