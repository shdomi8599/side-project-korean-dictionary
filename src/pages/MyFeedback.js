import EmptyFeedback from "../components/EmptyFeedback"
import MyFeedbackCard from "../components/MyFeedbackCard"

const MyFeedback = ({ champData }) => {

    const myChampArr = JSON.parse(localStorage.getItem('myChampList'))
    let myFeedbackStyle = "myfeedback"

    if (localStorage.myChampList === '[]') {
        myFeedbackStyle = "myfeedback_flex"
    }

    return (
        <div className="myfeedback_back">
            <div className={myFeedbackStyle}>
                {localStorage.myChampList === '[]' ? <EmptyFeedback /> :
                    myChampArr.map(champ => <MyFeedbackCard id={champ} champData={champData} />)}
            </div>
        </div>
    )
}

export default MyFeedback