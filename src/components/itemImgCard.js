import React,{ useEffect, useState } from "react";

const ItemImgCard = ({ itemNum, itemCountHandler }) => {

    //아이템이 선택되면 스타일이 바뀌게 하기 위한 코드
    const [itemImgTogle, setImgItemTogel] = useState(false);

    const imgTogle = () => {
        setImgItemTogel(!itemImgTogle)
    }


    return <div onClick={() => {
        if (itemCountHandler.itemCount < 6) {
            imgTogle();
            itemCountHandler.up();
            itemCountHandler.add(itemNum)
        }
        if (itemImgTogle && itemCountHandler.itemCount < 6) {
            itemCountHandler.down();
            itemCountHandler.remove(itemNum)
        }
    }}>
        <div>
            <img className={itemImgTogle ? "item_img select_item" : "item_img"} src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${itemNum}.png`} alt='' />
        </div>
    </div>
}

export default React.memo(ItemImgCard);