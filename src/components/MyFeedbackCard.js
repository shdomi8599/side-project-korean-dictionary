import { useState } from "react";
import { useNavigate } from "react-router-dom"
import resetLocal from "../function/reset"
import ConfirmMessage from "./ConfirmMessage";

// require('../img/spell/SummonerDot.png')


const MyFeedbackCard = ({ id, champData }) => {
    const navigate = useNavigate();

    const [myChamp] = champData.filter(champ => champ.key === id)

   const [cardTogle,setCardTogle] = useState(false);

   const cardTogleHandler = () =>{
    setCardTogle(!cardTogle)
   }

    const removeCardBtn = () => {  
            resetLocal(id)
            navigate(0)
    }

    return (
        <>
        {cardTogle&&<ConfirmMessage message={'삭제'} result={removeCardBtn} cancle={cardTogleHandler}/> }
        <div className="myfeedback_card" >
            <div className="myfeedback_card_header">
                <button className="myfeedback_card_btn" onClick={cardTogleHandler}>
                    <img id="card_img" src={require('../img/remove.png')} alt=""/>
                </button>
                <button className="myfeedback_card_btn">
                    <img id="card_img" src={require('../img/share.png')} alt=""/>
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