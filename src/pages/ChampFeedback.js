import { useState,useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import SpellCard from "../components/SpellCard";
import React from "react";
import ItemImgList from "../components/itemImgList";

const ChampFeedback = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

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

    if (location.state.name === '누누') {
        location.state.name = '누누와 윌럼프'
    }
    if (location.state.name === '트 페') {
        location.state.name = '트위스티드 페이트'
    }
    if (location.state.name === '레나타') {
        location.state.name = '레나타 글라스크'
    }
    if (location.state.name === '솔') {
        location.state.name = '아우렐리온 솔'
    }
    if (location.state.name === '블리츠') {
        location.state.name = '블리츠크랭크'
    }

    const [spellTogle, setSpellTogle] = useState(true)



    const spellTogleHandler = () => {
        setSpellTogle(!spellTogle)
    }

  const spellCardList = document.getElementsByClassName('spell_card');

    return (
        <div className="with_btn"
        //  onClick={!spellTogle ?  
        //스펠창이 켜졌을 때 스펠창 밖을 누르면 창이 꺼지게 만드는 것을 구현하려고했으나 일단 실패
        //     ()=>{setSpellTogle(!spellTogle)}
        //     :()=>{}}
            >
            {spellTogle ? <></> : <SpellCard spellTogleHandler={spellTogleHandler} />}
            {false ? <></>: <ItemImgList />}
      
            <button className="home_btn" onClick={() => { navigate(-1); }}>홈으로가기</button>
            <div className="champ_feedback" >
                <div>
                    <img className="champ_loading_img" alt='' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${location.state.id}_0.jpg`} />
                </div>
                <div className="champ_edit">
                    <div className="champ_edit champ_stats_name">
                        {location.state.name}
                    </div>
                    <div className="champ_edit champ_stats_position">
                        {tagsArr.map(x => <span>{x}</span>)}
                    </div>
                    <div className="champ_edit champ_stats_spell"
                        onClick={spellTogleHandler}>
                        {localStorage.src2 !== undefined ?
                            <span>
                                <span className="mini_spell">
                                    <img src={localStorage.src1} alt="" />
                                </span>
                                <span className="mini_spell">
                                    <img src={localStorage.src2} alt="" />
                                </span>
                            </span> :
                            <span>스펠을 선택해주세요!</span>}
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
//스펠을 선택해주세요!
export default React.memo(ChampFeedback)