import React from 'react';
import {BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';
import Login from './project/auth/Login';
import Register from './project/auth/Register';

const AppRoutes = () => {
  return (
      <Routes >
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
             <Route path='/register' element={<Register/>}/>

            
      </Routes>
  )
}

export default AppRoutes
