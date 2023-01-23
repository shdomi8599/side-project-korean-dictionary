import EmptyFeedback from "../components/EmptyFeedback"
import MyFeedbackCard from "../components/MyFeedbackCard"

const MyFeedback = ({ champData }) => {

    let myChampArr;
    if(localStorage.getItem('myChampList') !==null){
        myChampArr = JSON.parse(localStorage.getItem('myChampList'))
    }
   
    let myFeedbackStyle = "myfeedback"

    if (localStorage.myChampList === '[]' || localStorage.getItem('myChampList') ===null) {
        myFeedbackStyle = "myfeedback_flex"
    }

    return (
        <div className="myfeedback_back">
            <div className={myFeedbackStyle}>
                {localStorage.myChampList === '[]'||localStorage.getItem('myChampList') ===null? <EmptyFeedback /> :
                    myChampArr.map(champ => <MyFeedbackCard key={champ} id={champ} champData={champData} />)}
            </div>
        </div>
    )
}

export default MyFeedback