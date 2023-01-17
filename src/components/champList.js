import ChampCard from "./champCard"
import { useNavigate, useSearchParams } from "react-router-dom"
import Edit from "../pages/Edit"

const ChampList = ({champData}) => {
    // console.log(champData)

    // console.log(PickChamp)
    const navigate = useNavigate();

    const [searchParams,setSearchParams] = useSearchParams();
    

    return <div className="champ_list">
        {champData.map(PickChamp=> <ChampCard key={PickChamp.key} PickChamp={PickChamp}/>)}
    </div>
}

export default ChampList