import ItemImgCard from "../components/itemImgCard"
import React, { useState } from "react"
import BlockDisplay from "./BlockDisplay"
const ItemImgList = ({ id,itemTogleHandler }) => {
    const shoesNum = [3006, 3009, 3020, 3047, 3117, 3111, 3158]
    const armNum = [3001, 3068, 3065, 3075, 3083, 3084, 3121, 3119, 3110, 3193, 3742, 4401, 6662, 6664, 6665, 6667, 8001, 8020]
    const adWepNum = [3053, 3046, 3042, 3036, 3033, 3074, 3078, 3085, 3091, 3094, 3095, 3142, 3139, 3124, 3153, 3156, 3161, 3179, 3181, 3508, 3748, 3814, 6035, 6333, 6609, 6630, 6631, 6632, 6671, 6672, 6673, 6675, 6676, 6691, 6692, 6693, 6694, 6695, 6696]
    const apWepNum = [3041, 3040, 3089, 3100, 3102, 3135, 3116, 3115, 3152, 3157, 3165, 4628, 4629, 4633, 4644, 4645, 6653, 6655, 6656, 7028]
    const supNum = [3011, 3050, 3107, 3190, 3222, 3504, 3864, 4005, 4643, 6616, 6617, 3860, 7020]

    const [itemCount, setItemCount] = useState(0);
    let [itemArr, setItemArr] = useState([]);

    //여기까지 진행함 아이템 데이터를 itemArr에 모두 저장하기 까지 성공
    //아이디를 피드백에서 받아온다음 그 아이디와 배열값을 로컬에 저장하고 빼서 쓰는 방식으로 하면될듯?
    const itemCountHandler = {
        up: () => {
            if (itemCount < 6) {
                setItemCount(itemCount + 1)
            }
        },
        down: () => {
            if (itemCount < 6) {
                setItemCount(itemCount - 1)
            }
        },
        add: (x) => {
            setItemArr(() => {
                itemArr.push(x)
                return itemArr
            })
            console.log(itemArr)
        },
        remove: (x) => {
            setItemArr(() => {
                itemArr = itemArr.filter(item => item !== x)
                return itemArr
            })
            console.log(itemArr)
        },
        itemCount: itemCount
    }

    if(itemArr.length===6){
        itemTogleHandler()
        localStorage.setItem(`item${id}`, JSON.stringify(itemArr))
    }

    return (
        <div>
            <BlockDisplay block={itemTogleHandler} />
            <div className="item_card_img">
                <div className="item_setting">
                    <div className="item_card_list">
                        {adWepNum.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
                    </div>
                    <div className="item_card_list">
                        {shoesNum.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
                    </div>
                </div>
                <div className="item_setting">
                    <div className="item_card_list">
                        {supNum.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
                    </div>
                    <div className="item_card_list">
                        {apWepNum.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
                    </div>
                    <div className="item_card_list">
                        {armNum.map(x => <ItemImgCard itemNum={x} key={x} itemCountHandler={itemCountHandler} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ItemImgList);