import { useState } from "react";


const ItemImgCard = ({itemNum,itemCountHandler}) => {

   const [itemImgTogle, setImgItemTogel] =useState(false);

   const imgTogle = () => {
    setImgItemTogel(!itemImgTogle)
}

    return <div onClick={()=>{
        if(itemCountHandler.itemCount<6){
            imgTogle();
            itemCountHandler.up();
        }
        if(itemImgTogle){
            itemCountHandler.down();
        }

    }}>
        <div>
            <img className={itemImgTogle? "item_img select_item"  : "item_img"} src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${itemNum}.png`} alt='' />
        </div>
    </div>
}

export default ItemImgCard;