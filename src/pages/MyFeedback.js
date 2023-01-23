import EmptyFeedback from "../components/EmptyFeedback"
import MyFeedbackCard from "../components/MyFeedbackCard"

const MyFeedback = ({ champData }) => {
    let CheckHeight;
    let myChampArr;
    if(localStorage.getItem('myChampList') !==null){
        myChampArr = JSON.parse(localStorage.getItem('myChampList'))
        CheckHeight = Math.ceil(myChampArr.length/6)
    }
   
    let myFeedbackStyle = "myfeedback"

    if (localStorage.myChampList === '[]' || localStorage.getItem('myChampList') ===null) {
        myFeedbackStyle = "myfeedback_flex"
    }

    let height = 100

    if(CheckHeight>2) {
       height = height + (CheckHeight-2)*35
    }

    const backImgHeight = {height : `${height}vh`}

    return (
        <>
        <div className="myfeedback_back">
            <div className={myFeedbackStyle}>
                {localStorage.myChampList === '[]'||localStorage.getItem('myChampList') ===null? <EmptyFeedback /> :
                    myChampArr.map(champ => <MyFeedbackCard key={champ} id={champ} champData={champData} />)}
            </div>
        </div>
        <div className="myfeedback_back_img" style={backImgHeight}>

        </div>
        </>
    )
}

export default MyFeedback