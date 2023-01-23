import React,{ useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import SpellCard from "../components/SpellCard";
import ItemImgList from "../components/itemImgList";
import MiniItem from "../components/MiniItem";
import MiniSpell from "../components/MiniSpell";
import FeedbackText from "../components/FeedbackText";
import resetLocal from "../function/reset"
import ConfirmMessage from "../components/ConfirmMessage";

const ChampFeedback = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const tagsArr = [];
    const feedTextId = localStorage.getItem(`feedText${id}`)
    const spell1 = localStorage.getItem(`spell1${id}`)
    const spell2 = localStorage.getItem(`spell2${id}`)
    const itemId = localStorage.getItem(`item${id}`)
    const myChampList = localStorage.getItem(`myChampList`)
    const champDataArr = [feedTextId, spell2, spell1, itemId]
    const booleanArr = champDataArr.map(x => x !== null);

    const [resetTogle,setResetTogle] = useState(false);

    const resetTogleHandler = () =>{
     setResetTogle(!resetTogle)
    }
 
     const resetBtn = () => {  
        resetLocal(id)
        navigate(0);
     }

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

    if (feedbackText === '피드백을 적어주세요!' && feedTextId === null) {
        style = 'champ_edit champ_stats_feedback justifyCenter';
    }

    if (feedbackText !== '피드백을 적어주세요!') {
        localStorage.setItem(`feedText${id}`, JSON.stringify(feedbackText))
    }

    if (myChampList !== null && JSON.parse(myChampList).includes(id)) {

    }
    else if (booleanArr.includes(true) && myChampList !== null) {
        let myChampListArr = JSON.parse(myChampList)
        myChampListArr.push(id)
        localStorage.setItem('myChampList', JSON.stringify(myChampListArr))
    } else if (booleanArr.includes(true) && myChampList === null) {
        localStorage.setItem('myChampList', JSON.stringify([id]))
    }

    return (
        <div className="with_btn">
            {resetTogle&&<ConfirmMessage message={'삭제'} result={resetBtn} cancle={resetTogleHandler}/>}
            {spellTogle ? <></> : <SpellCard spellTogleHandler={spellTogleHandler} id={id} spellTogle={spellTogle} />}
            {itemTogle ? <></> : <ItemImgList id={id} itemTogleHandler={itemTogleHandler} />}
            <button className="home_btn" onClick={() => { navigate(-1); }}>뒤로가기</button>
            <button className="reset_btn" onClick={resetTogleHandler}>{location.state.name} 피드백 삭제</button>
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
                        {spell2 !== null ?
                            <MiniSpell id={id} /> :
                            <span className="fake_placeholder">스펠을 선택해주세요!</span>}
                    </div>
                    <div className="champ_edit champ_stats_item" onClick={itemTogleHandler}>
                        {itemId !== null ?
                            JSON.parse(itemId).map(num => <MiniItem pickedItem={num} />)
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