import React from "react";
import { useLocation } from "react-router-dom";
import ChampList from "../components/champList";
import HomeFooter from "../components/HomeFooter";

const Home = ({ champData, backImg, loginHandler }) => {

  const { state } = useLocation();

  if (localStorage.currentId !== 'null') {

  } else if (state !== null) {
    localStorage.setItem('currentId', JSON.stringify(state.id))
    loginHandler()
  } else {
    localStorage.setItem('currentId', JSON.stringify(null))
  }

  return (
    <>
      <div className='back_Img' style={backImg} >
        <ChampList champData={champData} />
      </div>
      <HomeFooter />
    </>
  )
}

export default Home;