import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let champData;

function currentloginid() {
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
currentloginid()
  .then(champData => champData = Object.values(JSON.parse(champData).data))
  .then(champData => root.render(
    <App champData={champData} />
  ));

