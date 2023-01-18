import { useParams, useLocation, useState,useNavigate } from "react-router-dom"


const ChampFeedback = ({ parentFunction }) => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.state)
    const tagsArr = [];
    location.state.tags.map(x => {
        if (x === 'Fighter') {
            tagsArr.push('근접딜러')
        }
        if (x === 'Tank') {
            tagsArr.push('탱커')
        }
        if (x === 'Mage') {
            tagsArr.push('마법딜러')
        }
        if (x === 'Marksman') {
            tagsArr.push('원거리딜러')
        }
        if (x === 'Assassin') {
            tagsArr.push('암살자')
        }
        if (x === 'Support') {
            tagsArr.push('서포터')
        }
    })
    console.log(tagsArr)
    return (
        <div className="with_btn">
            <button className="home_btn" onClick={()=>{navigate(-1)}}>홈으로가기</button>
            <div className="champ_feedback" >
                <div>
                    <img className="champ_loading_img" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${location.state.id}_0.jpg`} />
                </div>
                <div className="champ_edit">
                    <div className="champ_edit champ_stats_name">
                      {location.state.name}
                    </div>
                    <div className="champ_edit champ_stats_position">
                    {tagsArr.map(x => <span>{x}</span>)}
                    </div>
                    <div className="champ_edit champ_stats_spell">
                    <img className="spell" src={require('../img/spell/SummonerBarrier.png')} alt=""/>
                    <img className="spell" src={require('../img/spell/SummonerBoost.png')} alt=""/>
                    </div>
                    <div className="champ_edit champ_stats_item">
                        아이템 고르는 창
                    </div>
                    <div className="champ_edit champ_stats_feedback">
                        피드백 텍스트 창
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChampFeedback