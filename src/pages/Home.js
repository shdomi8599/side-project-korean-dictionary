import ChampList from "../components/champList";
import SpellCard from "../components/SpellCard";


const Home = ({champData, backImg}) => {
    return (
        <div className='back_Img'style={backImg} >
      <ChampList champData={champData} />
      </div>
    )
}

export default Home;