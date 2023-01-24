import BoardCardSet from "./BoardCardSet";
import ShareCard from "./ShareCard";

const BoardFeedbackCard = ({ shareChampData, champData }) => {

    const { id, pushText } = shareChampData;

    return <div className="board_card">
        <ShareCard shareChampData={shareChampData} champData={champData} key={id} />
        <BoardCardSet id={id} pushText={pushText} />
    </div>
}

export default BoardFeedbackCard;