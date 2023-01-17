import ChampCard from "./champCard"


const ChampList = ({champData}) => {
    // console.log(champData)

    // console.log(onepick)

    

    return <div className="champ_list">
        {champData.map(onepick=> <ChampCard key={onepick.key} onepick={onepick}/>)}
    </div>
}

export default ChampList