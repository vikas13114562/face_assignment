

import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Register from './components/register/Register';
import Login from './components/register/Login';
import Home from './components/home_/Home';



function App() {
  

  return (
   <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/register' element = {<Register />} />
        </Routes>
      </BrowserRouter>
      
      
   </div>
  );
}

export default App;
