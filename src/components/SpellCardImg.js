import { useState } from "react";



const SpellCardImg = ({ src, spellCountHandler, reverseSpellCountHandler, spellCount, spellTogleHandler }) => {



    const [spellImgTogle, setImgSpellTogel] = useState(false);

    const imgTogle = () => {
        setImgSpellTogel(!spellImgTogle)
    }

    const baseTogle = () => {
        spellCountHandler();
        imgTogle();
        if (localStorage.src2 !== undefined) {
            localStorage.clear()
        }
        if (localStorage.src1 !== undefined) {
            localStorage.setItem('src2', src)
            spellTogleHandler()
        } else {
            localStorage.setItem('src1', src)
        }
    }

    const reverseTogle = () => {
        reverseSpellCountHandler();
        imgTogle();
    }

    return <div className={spellImgTogle ?
        'spell_box select_spell' : 'spell_box'}
        onClick={
            spellCount < 2 ?
                (spellImgTogle ? reverseTogle : baseTogle) :
                (() => {
                    console.log('끝')
                })
        }>
        <img className="spell" src={src} alt="" />
    </div>
}

export default SpellCardImg;

