import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let champData;
let itemData;
const rand162 = Math.floor(Math.random() * 163);

function riotApiData() {
  return fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json', {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      champData = JSON.stringify(data);
      return champData;
    })
}
riotApiData()
  .then(champData => champData = Object.values(JSON.parse(champData).data))
  .then(champData => {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/item.json')
      .then(champData,res => res.json())
      .then(champData,data => data)
      .then(async(itemData) => {
        itemData = await itemData.json()
        return root.render(
          <App champData={champData} itemData={itemData} backImg={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champData[rand162].id}_0.jpg)` }} />
        )
      })
});

