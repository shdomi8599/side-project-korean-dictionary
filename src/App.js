import './App.css';
import './bootstrap.min.css'
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './pages/Board';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyFeedback from './pages/MyFeedback';
import ChampFeedback from './pages/ChampFeedback';
import AllNav from './components/AllNav';


 function App({ champData, backImg }) {
  

  return (
    <BrowserRouter>
      <AllNav />
      <Routes>
        <Route path='/' element={<Home champData={champData} backImg={backImg} />} />
        <Route path='/champFeedback/:id' element={<ChampFeedback />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/board' element={<Board />} />
        <Route path='/myFeedback' element={<MyFeedback champData={champData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);


