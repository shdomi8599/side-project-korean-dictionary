import SharePosition from "./SharePosition";
import React from "react";

const ShareCard = ({ shareChampData,champData }) => {

    const [myChamp] = champData.filter(champ => champ.key === shareChampData.key)

    const position = {
        "Fighter": "근접딜러",
        "Tank": "탱커",
        "Mage": "마법딜러",
        "Marksman": "원거리 딜러",
        "Assassin": "암살자",
        "Support": "서포터"
    }

    const tagsArr = [];

    myChamp.tags.map(x => {
        tagsArr.push(position[x])
    })

    const champName = {
        '누누': '누누와 윌럼프',
        '트 페': '트위스티드 페이트',
        '레나타': '레나타 글라스크',
        '솔': '아우렐리온 솔',
        '블리츠': '블리츠크랭크'
    }

    if (champName[myChamp.name]) {
        myChamp.name = champName[myChamp.name]
    }
    
    return <>
        <div className="share_card" >
            <div>
                <img className="share_card_img" alt='' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${myChamp.id}_0.jpg`} />
            </div>
            <div className="share_card_set">
                <div className="share_card_name">
                    {myChamp.name}
                </div>
                <div className="share_card__position">
                  {tagsArr.map(position => <SharePosition position={position} key={position}/>)} 
                </div>
                <div className="share_card__spell" >
                    {shareChampData.spell1 !== null && shareChampData.spell2 !== null ?
                        <>
                            <img src={shareChampData.spell1} alt="" />
                            <img src={shareChampData.spell2} alt="" />
                        </>
                        :
                        <></>
                    }
                </div>
                <div className="share_card__item">
                    {shareChampData.itemId !== null ?
                        shareChampData.itemId.map(itemNum =>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${itemNum}.png`}
                                alt="" key={itemNum} />
                        ) : <></>
                    }
                </div>
                <div id="share_card_text">
                    {shareChampData.feedTextId !== null ?
                       <span>{shareChampData.feedTextId}</span> :
                        <></>}
                </div>
            </div>
        </div>
    </>
}

export default React.memo(ShareCard);