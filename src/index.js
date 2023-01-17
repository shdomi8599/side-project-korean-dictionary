import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let champData;
const rand162 = Math.floor(Math.random() * 163);


function riotApiData() {
  return fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json', {
    method: 'GET',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      champData = JSON.stringify(data);
      return champData;
    })
}
riotApiData()
  .then(champData => champData = Object.values(JSON.parse(champData).data))
  .then(champData => root.render(
    <App champData={champData} backImg={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champData[rand162].id}_0.jpg)` }} />
  ));

