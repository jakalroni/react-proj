/* eslint-disable */

import './App.css';
// import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Header from './components/Header.js';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
// import Mypage from './pages/Mypage.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<div className="main-bg">메인페이지임</div>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/signup' element={<Signup/>}/>
        <Route path='/user/write' element={<div>글쓰기 페이지임</div>}/>
        <Route path='/user/mypage' element={<div>마이페이지 페이지임</div>}/>
      </Routes>

    </div>
  );
}

export default App;
