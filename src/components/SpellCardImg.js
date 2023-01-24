import React,{ useState } from "react";



const SpellCardImg = ({ src, spellCountHandler, reverseSpellCountHandler, spellCount, spellTogleHandler, id }) => {

    //선택된 이미지에 효과를 주기 위한 코드

    const [spellImgTogle, setImgSpellTogel] = useState(false);

    const imgTogle = () => {
        setImgSpellTogel(!spellImgTogle)
    }

    //선택되거나 취소된 스펠 이미지들이 삭제 또는 저장되기 위한 코드
    const baseTogle = () => {
        spellCountHandler();
        imgTogle();
        if (localStorage.getItem(`spell2${id}`) !== null) {
            localStorage.removeItem(`spell2${id}`);
            localStorage.removeItem(`spell1${id}`);
        }
        if (localStorage.getItem(`spell1${id}`) !== null) {
            localStorage.setItem(`spell2${id}`, JSON.stringify(src))
            spellTogleHandler()
        }
        if (localStorage.getItem(`spell1${id}`) === null) {
            localStorage.setItem(`spell1${id}`, JSON.stringify(src))
        }
    }

    const reverseTogle = () => {
        reverseSpellCountHandler();
        imgTogle();
        localStorage.clear()
    }

    return <div className={spellImgTogle ?
        'spell_box select_spell' : 'spell_box'}
        onClick={
        spellCount < 2 && spellImgTogle ? reverseTogle : baseTogle
        }>
        <img className="spell" src={src} alt="" />
    </div>
}

export default React.memo(SpellCardImg);

