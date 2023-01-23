import ItemImgCard from "./itemImgCard"

const ItemCardSetting = ({arrName,itemCountHandler}) => {
    return <div className="item_card_list">
        {arrName.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
    </div>

}

export default ItemCardSetting