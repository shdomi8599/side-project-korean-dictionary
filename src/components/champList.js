import ChampCard from "./champCard"
import React from "react"

const ChampList = ({ champData, }) => {

    // const [searchParams,setSearchParams] = useSearchParams();


    return <div className="champ_list">
        {champData.map(PickChamp => <ChampCard key={PickChamp.key} PickChamp={PickChamp} />)}
    </div>
}

export default React.memo(ChampList)