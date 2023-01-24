import React from "react";

const BlockDisplay = ({ block, spellTogle, spellCount, id, height }) => {
    //height는 나만의 피드백에서만 높이를 반응형으로 사용하기 위해 만든 코드
    const backImgHeight = { height: `${height - 20}vh` }

    return <div className="block_display" style={height && backImgHeight} onClick={() => {
        block();
        if (localStorage.getItem(`spell2${id}`) !== null) {
            return
        } else if (!spellTogle && localStorage.getItem(`spell1${id}`) !== null) {
            spellCount = 0;
            localStorage.removeItem(`spell1${id}`);
        }
    }}>
    </div>
}

export default React.memo(BlockDisplay)