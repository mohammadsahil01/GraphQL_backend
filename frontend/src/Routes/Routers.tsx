
import {Routes,Route} from 'react-router-dom'

import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Blogs from '../Pages/Blogs';
import HomePage from '../Pages/HomePage';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
  );
};

export default Routers;