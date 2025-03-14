import React from 'react';
import Login from './Login'
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () =>
{
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;