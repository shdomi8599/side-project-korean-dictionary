const ItemImgCard = ({itemNum}) => {
    return <div>
        <div>
            <img className="item_img" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${itemNum}.png`} alt='' />
        </div>
    </div>
}

export default ItemImgCard;