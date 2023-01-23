import { useNavigate } from "react-router-dom"


const MyFeedbackCard = ({ id, champData }) => {
    const navigate = useNavigate();

    const [myChamp] = champData.filter(champ => champ.key === id)

    const removeCardBtn = () => {
        let filterArr = JSON.parse(localStorage.getItem(`myChampList`)).filter(x => parseInt(x) !== parseInt(id))
        console.log(filterArr)
        localStorage.setItem('myChampList', JSON.stringify(filterArr))
        window.localStorage.removeItem(`feedText${id}`);
        window.localStorage.removeItem(`spell2${id}`);
        window.localStorage.removeItem(`spell1${id}`);
        window.localStorage.removeItem(`item${id}`);
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