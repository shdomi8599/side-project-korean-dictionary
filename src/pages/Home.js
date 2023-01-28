import React from "react";
import ChampList from "../components/champList";
import HomeFooter from "../components/HomeFooter";

const Home = ({ champData, backImg, }) => {

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