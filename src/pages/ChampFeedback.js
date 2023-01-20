import { useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import SpellCard from "../components/SpellCard";
import React from "react";
import ItemImgList from "../components/itemImgList";

const ChampFeedback = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const tagsArr = [];

    const position = {
        "Fighter": "근접딜러",
        "Tank": "탱커",
        "Mage": "마법딜러",
        "Marksman": "원거리 딜러",
        "Assassin": "암살자",
        "Support": "서포터"
    }

    location.state.tags.map(x => {
        tagsArr.push(position[x])
    })

    const champName = {
        '누누': '누누와 윌럼프',
        '트 페': '트위스티드 페이트',
        '레나타': '레나타 글라스크',
        '솔': '아우렐리온 솔',
        '블리츠': '블리츠크랭크'
    }

    if (champName[location.state.name]) {
        location.state.name = champName[location.state.name]
    }

    const [spellTogle, setSpellTogle] = useState(true)
    const [itemTogle, setItemTogle] = useState(true)

    const spellTogleHandler = () => {
        setSpellTogle(!spellTogle)
    }
    const itemTogleHandler = () => {
        setItemTogle(!itemTogle)
    }

    const spellBlockHandler = () => {
        setSpellTogle(!spellTogle)
        //count가 1인데 블락이 실행된다면 count를 0으로 바꾸고 이미지 src1값도 지워줘야함
    }

    const itemBlockHandler = () => {
        setItemTogle(!itemTogle)
    }


    return (
        <div className="with_btn">
            {spellTogle ? <></> : <SpellCard spellTogleHandler={spellTogleHandler} spellBlockHandler={spellBlockHandler} id={id} spellTogle={spellTogle}/>}
            {itemTogle ? <></> : <ItemImgList itemBlockHandler={itemBlockHandler} />}

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
                        {localStorage.getItem(`spell2${id}`) !== null ?
                            <span>
                                <span className="mini_spell">
                                    <img src={JSON.parse(localStorage.getItem(`spell1${id}`))} alt="" />
                                </span>
                                <span className="mini_spell">
                                    <img src={JSON.parse(localStorage.getItem(`spell2${id}`))} alt="" />
                                </span>
                            </span> :
                            <span>스펠을 선택해주세요!</span>}
                    </div>
                    <div className="champ_edit champ_stats_item" onClick={itemTogleHandler}>
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

export default React.memo(ChampFeedback)