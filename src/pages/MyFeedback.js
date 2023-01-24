import EmptyFeedback from "../components/EmptyFeedback"
import MyFeedbackCard from "../components/MyFeedbackCard"

const MyFeedback = ({ champData }) => {
    //반응형으로 높이를 변경해주기 위한 코드
    let CheckHeight;
    let myChampArr;
    if(localStorage.getItem('myChampList') !==null){
        myChampArr = JSON.parse(localStorage.getItem('myChampList'))
        CheckHeight = Math.ceil(myChampArr.length/6)
    }
    let height = 100
    if(CheckHeight>2) {
       height = height + (CheckHeight-2)*35
    }
    const backImgHeight = {height : `${height}vh`}

    // 빈 글씨와 피드백 카드가 생겼을때 차이점을 두기 위한 코드
    let myFeedbackStyle = "myfeedback"
    
    if (localStorage.myChampList === '[]' || localStorage.getItem('myChampList') ===null) {
        myFeedbackStyle = "myfeedback_flex"
    }

    return (
        <>
        <div className="myfeedback_back">
            <div className={myFeedbackStyle}>
                {localStorage.myChampList === '[]'||localStorage.getItem('myChampList') ===null? <EmptyFeedback /> :
                    myChampArr.map(champ => <MyFeedbackCard key={champ} id={champ} champData={champData} height={height} />)}
            </div>
        </div>
        <div className="back_img" style={backImgHeight}>

        </div>
        </>
    )
}

export default MyFeedback