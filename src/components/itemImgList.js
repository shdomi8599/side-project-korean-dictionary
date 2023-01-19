import ItemImgCard from "../components/itemImgCard"

const ItemImgList = () => {
    const shoesNum = [3006,3009,3020,3047,3117,3111,3158]
    const armNum =[3001,3068,3065,3075,3083,3084,3121,3119,3110,3193,3742,4401,6662,6664,6665,6667,8001,8020]
    const adWepNum =[3053,3046,3042,3036,3033,3074,3078,3085,3091,3094,3095,3142,3139,3124,3153,3156,3161,3179,3181,3508,3748,3814,6035,6333,6609,6630,6631,6632,6671,6672,6673,6675,6676,6691,6692,6693,6694,6695,6696]
    const apWepNum = [3041,3040,3089,3100,3102,3135,3116,3115,3152,3157,3165,4628,4629,4633,4644,4645,6653,6655,6656,7028]
    const supNum = [3011,3050,3107,3190,3222,3504,3864,4005,4643,6616,6617,3860,7020]

    return (
        <div className="item_card_img">
            <div className="item_setting">
            <div className="item_card_list">
            {adWepNum.map(x=> <ItemImgCard itemNum={x}/>)}
            </div>
            <div className="item_card_list">
            {shoesNum.map(x=> <ItemImgCard itemNum={x}/>)}
            </div>
            </div>
            <div className="item_setting">
            <div className="item_card_list">
            {supNum.map(x=> <ItemImgCard itemNum={x}/>)}
            </div>
            <div className="item_card_list">
            {apWepNum.map(x=> <ItemImgCard itemNum={x}/>)}
            </div>
            <div className="item_card_list">
            {armNum.map(x=> <ItemImgCard itemNum={x}/>)}
            </div>
            </div>
        </div>
    )
}

export default ItemImgList;