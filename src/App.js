import './App.css';
import { useEffect, useState, useMemo, useRef } from 'react';
import ChampList from './components/champList';
import HeaderNav from './components/headerNav';



function App({ champData }) {
const backImg = {}

  // console.log(onepick)
  return (
    <div className='app'>
      {/* <HeaderNav /> */}
      <ChampList champData={champData} />
    </div>
  );
}

export default App;


