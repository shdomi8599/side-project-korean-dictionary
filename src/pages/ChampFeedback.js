import { useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import SpellCard from "../components/SpellCard";
import React from "react";
import ItemImgList from "../components/itemImgList";
import MiniItem from "../components/MiniItem";
import MiniSpell from "../components/MiniSpell";
import FeedbackText from "../components/FeedbackText";

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
    const [textTogle, setTextTogle] = useState(true)
    const [feedbackText, setFeedbackText] = useState('피드백을 적어주세요!')

    const spellTogleHandler = () => {
        setSpellTogle(!spellTogle)
    }
    const itemTogleHandler = () => {
        setItemTogle(!itemTogle)
    }
    const textTogleHandler = () => {
        setTextTogle(!textTogle)
    }
    const feedbackTextInput = (x) => {
        setFeedbackText(x)
    }

    let style = "champ_edit champ_stats_feedback"
    if (feedbackText === '피드백을 적어주세요!' && localStorage.getItem(`feedText${id}`) === null) {
        style = 'champ_edit champ_stats_feedback justifyCenter';
    }

    if (feedbackText !== '피드백을 적어주세요!') {
        localStorage.setItem(`feedText${id}`, JSON.stringify(feedbackText))
    }

    return (
        <div className="with_btn">
            {spellTogle ? <></> : <SpellCard spellTogleHandler={spellTogleHandler} id={id} spellTogle={spellTogle} />}
            {itemTogle ? <></> : <ItemImgList id={id} itemTogleHandler={itemTogleHandler} />}
            <button className="home_btn" onClick={() => { navigate(-1); }}>홈으로가기</button>
            <button className="reset_btn" onClick={() => {
                if (window.confirm(`정말 ${location.state.name}를(을) 초기화 하시겠습니까?`)) {
                    window.localStorage.removeItem(`feedText${id}`);
                    window.localStorage.removeItem(`spell2${id}`);
                    window.localStorage.removeItem(`spell1${id}`);
                    window.localStorage.removeItem(`item${id}`);
                    navigate(0);
                }
            }}>초기화하기</button>
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
                            <MiniSpell id={id} /> :
                            <span className="fake_placeholder">스펠을 선택해주세요!</span>}
                    </div>
                    <div className="champ_edit champ_stats_item" onClick={itemTogleHandler}>
                        {localStorage.getItem(`item${id}`) !== null ?
                            JSON.parse(localStorage.getItem(`item${id}`)).map(num => <MiniItem pickedItem={num} />)
                            :
                            <span className="fake_placeholder">아이템을 선택해주세요!</span>
                        }
                    </div>
                    <div className={style}>
                        {<FeedbackText feedbackTextInput={feedbackTextInput} textTogleHandler={textTogleHandler} id={id}
                            feedbackText={feedbackText} textTogle={textTogle} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ChampFeedback)