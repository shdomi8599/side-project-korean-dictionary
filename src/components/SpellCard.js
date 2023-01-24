import { useState, useRef } from 'react';
import SpellCardImg from './SpellCardImg';
import React from 'react';
import BlockDisplay from './BlockDisplay';

const SpellCard = ({ spellTogleHandler, id, spellTogle }) => {

    //스펠 이미지 소스를 저장한 배열
    const spellSrcArr = [
        require('../img/spell/SummonerBarrier.png'),
        require('../img/spell/SummonerBoost.png'),
        require('../img/spell/SummonerDot.png'),
        require('../img/spell/SummonerExhaust.png'),
        require('../img/spell/SummonerFlash.png'),
        require('../img/spell/SummonerHaste.png'),
        require('../img/spell/SummonerHeal.png'),
        require('../img/spell/SummonerMana.png'),
        require('../img/spell/SummonerSmite.png'),
        require('../img/spell/SummonerTeleport.png'),
    ]

    //선택되고 취소되는 스펠을 카운팅 하기 위한 코드
    const [spellCount, setSpellCount] = useState(0)

    const spellCountHandler = () => {
        if (spellCount < 2) {
            setSpellCount(spellCount + 1)
        }
    }

    const reverseSpellCountHandler = () => {
        if (spellCount < 2) {
            setSpellCount(spellCount - 1)
        }
    }

    return <div>
        <BlockDisplay block={spellTogleHandler} id={id} spellTogle={spellTogle} spellCount={spellCount} />
        <div className='spell_card'>
            {spellCount < 2 && spellSrcArr.map(x =>
                <SpellCardImg src={x} key={x} id={id}
                    spellCount={spellCount} spellCountHandler={spellCountHandler}
                    reverseSpellCountHandler={reverseSpellCountHandler}
                    spellTogleHandler={spellTogleHandler}/>)}
        </div>
    </div>
}

export default React.memo(SpellCard);