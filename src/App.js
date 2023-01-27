import './App.css';
import './bootstrap.min.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './pages/Board';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyFeedback from './pages/MyFeedback';
import ChampFeedback from './pages/ChampFeedback';
import AllNav from './components/AllNav';

function App({ champData, backImg }) {

  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(!login)
  }

  return (
    <BrowserRouter>
      <AllNav login={login} />
      <Routes>
        <Route path='/' element={<Home champData={champData} backImg={backImg} loginHandler={loginHandler} />} />
        <Route path='/champFeedback/:id' element={<ChampFeedback />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/board' element={<Board champData={champData} />} />
        <Route path='/myFeedback' element={<MyFeedback champData={champData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


