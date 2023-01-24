import { useState } from "react";

const BoardCardSet = ({ id, pushText }) => {

    const [btnTogle, setBtnTogle] = useState(true);
    const [countLike, setCountLike] = useState(0);

    const btnTogleHandler = () => {
        setBtnTogle(!btnTogle)
        if (countLike === 0) {
            setCountLike(countLike + 1)
        } else {
            setCountLike(countLike - 1)
        }

    }

    return <div id="board_card_set">
        <div className="board_card_id">
            {id}
        </div>
        <div>
            {pushText}
        </div>
        <div id="board_card_etc">
            <button id={btnTogle ? 'board_card_btn' : 'board_card_btn_back'} onClick={btnTogleHandler}>추천하기</button>
            + {countLike}
        </div>
    </div>
}

export default BoardCardSet;