import { useNavigate } from "react-router-dom"
import resetLocal from "../function/reset"




const MyFeedbackCard = ({ id, champData }) => {
    const navigate = useNavigate();

    const [myChamp] = champData.filter(champ => champ.key === id)

    const removeCardBtn = () => {
        resetLocal(id)
        navigate(0)
    }

    return (
        <div className="myfeedback_card" >
            <div className="myfeedback_card_header">
                <button className="myfeedback_card_btn" onClick={removeCardBtn}>
                    삭제
                </button>
                <button className="myfeedback_card_btn">
                    공유
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
    )
}

export default MyFeedbackCard;