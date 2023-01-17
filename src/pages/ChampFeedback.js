import { useParams, useLocation,useState } from "react-router-dom"


const ChampFeedback =({parentFunction}) => {
    const {id} = useParams();
  const location = useLocation();

    // console.log(location.state)
    const tagsArr = [];
    location.state.tags.map(x => {
        if (x === 'Fighter'){
             tagsArr.push('근접딜러')
        }
        if(x === 'Tank'){
             tagsArr.push('탱커')
        }
        if(x === 'Mage'){
            tagsArr.push('마법딜러')
        }
        if(x === 'Marksman'){
            tagsArr.push('원거리딜러')
        }
        if(x === 'Assassin'){
            tagsArr.push('암살자')
        }
        if(x === 'Support'){
            tagsArr.push('서포터')
        }
    })
    console.log(tagsArr)
    return (
        <div className="champ_feedback back_Img" >
            <div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${location.state.id}_0.jpg`}/>
            </div>
            <div className="champ_edit">
                <div>
                    {location.state.name}
                </div>
                <div>
                    {location.state.title}
                </div>
                <div>
                    {tagsArr.map(x => <span className="champ_class">{x}</span>)}
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ChampFeedback