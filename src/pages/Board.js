import BoardFeedbackCard from "../components/BoardFeedbackCard"
import EmptyShare from "../components/EmptyShare";

const Board = ({champData}) => {

    // 공유하기 버튼으로 넘어온 데이터를 받기 위한 코드
    let shareList;
    if(localStorage.getItem('shareData')!==null){
        shareList=JSON.parse(localStorage.shareData)
    }

    //반응형으로 높이를 변경해주기 위한 코드
    let CheckHeight;
    if(localStorage.getItem('shareData')!==null){
        CheckHeight = shareList.length;
    }
    let height = 100
    if(CheckHeight>1) {
       height = height + (CheckHeight)*35
    }
    const backImgHeight = {height : `${height}vh`}

    return (
        <>
            <div className="board">
                {shareList !== undefined? 
                shareList.map(shareChampData=> <BoardFeedbackCard shareChampData={shareChampData} champData={champData} />)
                :
                 <EmptyShare/>}
            </div>
            <div className="back_img" id="board_back" style={backImgHeight}>
            </div>
        </>
    )
}

export default Board