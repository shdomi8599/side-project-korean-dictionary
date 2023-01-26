import { useLocation } from "react-router-dom";

const BlockMessage = ({ blockTogleHandelr }) => {

    const location = useLocation()

    return <div className="block_message">
        <div>
            {location.state.message} 확인해주세요.
        </div>
        <div>
            <button onClick={blockTogleHandelr} >확인</button>
        </div>
    </div>
}

export default BlockMessage;