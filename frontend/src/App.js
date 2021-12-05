// cd /d d:\tentativax

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginOfc from './pages/Loginofc';
import Cadastrar from './pages/cadastro';
import Home from './pages/Home';
import Livros from './pages/livros';
import Midias from './pages/midias';
import User from './pages/user';
import './index.css'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<LoginOfc/>}/>
          <Route path="/cadastro"element={<Cadastrar/>}/>
          <Route path="/home"element={<Home/>}/>
          <Route path="/livros"element={<Livros/>}/>
          <Route path="/midias"element={<Midias/>}/>
          <Route path="/user"element={<User/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
