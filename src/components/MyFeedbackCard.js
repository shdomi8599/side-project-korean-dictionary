import { useState } from "react";
import { useNavigate } from "react-router-dom"
import resetLocal from "../function/reset"
import BlockDisplay from "./BlockDisplay";
import ConfirmMessage from "./ConfirmMessage";
import PushMessage from "./PushMessage";


const MyFeedbackCard = ({ id, champData, height }) => {
    const navigate = useNavigate();


    //현재 선택된 챔피언의 키와 id가 일치하는지 확인해서 챔피언 데이터를 추출하는 코드
    const [myChamp] = champData.filter(champ => champ.key === id)

    //피드백 삭제 버튼이 나올 때 바깥을 눌러도 취소될 수 있도록 하기 위한 코드
    const [cardTogle, setCardTogle] = useState(false);

    const cardTogleHandler = () => {
        setCardTogle(!cardTogle)
    }

    const removeCardBtn = () => {
        resetLocal(id)
        navigate(0)
    }
    //공유하기 버튼을 위한 코드
    const [shareTogle, setShareTogle] = useState(false);

    const shareTogleHandler = () => {
        setShareTogle(!shareTogle)
    }

    // push 메세지를 전달하기 위한 코드

    const [pushTogle, setPushTogle] = useState(false);

    const pushTogleHandeler = () => {
        setShareTogle(!shareTogle)
        setPushTogle(!pushTogle)
    }

    const [pushMessage, setPushMessage] = useState('');

    const pushMessageHandler = (x) => {
        setPushMessage(x)
    }

    //공유하기를 실행하면 작동하는 코드
    const shareBtn = () => {
        setPushTogle(!pushTogle)
        let shareDataArr;
        const spell1 = JSON.parse(localStorage.getItem(`spell1${id}`))
        const spell2 = JSON.parse(localStorage.getItem(`spell2${id}`))
        const itemId = JSON.parse(localStorage.getItem(`item${id}`))
        const feedTextId = JSON.parse(localStorage.getItem(`feedText${id}`))


        const shareDataObj = {
            spell1: spell1,
            spell2: spell2,
            itemId: itemId,
            feedTextId: feedTextId,
            key: id,
            id: 'shdomi',
            pushText: pushMessage
        }

        if (localStorage.getItem('shareData') === null) {
            shareDataArr = [];
            shareDataArr.push(shareDataObj)
        } else {
            shareDataArr = JSON.parse(localStorage.shareData)
            shareDataArr.push(shareDataObj)
        }

        localStorage.setItem('shareData', JSON.stringify(shareDataArr))
    }



    return (
        <>

            {pushTogle &&
                <><PushMessage pushMessageHandler={pushMessageHandler} result={shareBtn}
                    cancle={() => { setPushTogle(!pushTogle) }} />
                    <BlockDisplay block={() => { setPushTogle(!pushTogle) }} height={height} />
                </>
            }


            {cardTogle &&
                <>
                    <ConfirmMessage message={'삭제'} result={removeCardBtn} cancle={cardTogleHandler} />
                    <BlockDisplay block={cardTogleHandler} height={height} />
                </>}
            {shareTogle &&
                <>
                    <ConfirmMessage message={'공유'} result={pushTogleHandeler} cancle={shareTogleHandler} />
                    <BlockDisplay block={shareTogleHandler} height={height} />
                </>
            }
            <div className="myfeedback_card" >
                <div className="myfeedback_card_header">
                    <button className="myfeedback_card_btn" onClick={cardTogleHandler}>
                        <img id="card_img" src={require('../img/remove.png')} alt="" />
                    </button>
                    <button className="myfeedback_card_btn" onClick={shareTogleHandler}>
                        <img id="card_img" src={require('../img/share.png')} alt="" />
                    </button>
                </div>
                <div>
                    <img onClick={() => {
                        navigate(`/champFeedback/${myChamp.key}`,
                            {
                                state: {
                                    ...myChamp,
                                }
                            })
                    }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${myChamp.id}_0.jpg`} alt="" />
                </div>
                <div className="myfeedback_card_name">
                    {myChamp.name}
                </div>
            </div>
        </>
    )
}

export default MyFeedbackCard;