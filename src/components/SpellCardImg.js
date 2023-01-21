import { useState } from "react";



const SpellCardImg = ({ src, spellCountHandler, reverseSpellCountHandler, spellCount, spellTogleHandler, id }) => {

    const [spellImgTogle, setImgSpellTogel] = useState(false);

    const imgTogle = () => {
        setImgSpellTogel(!spellImgTogle)
    }

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

