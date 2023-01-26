const BlockMessage =({blockTogleHandelr}) =>{
    return <div className="block_message">
        <div>
            입력창을 확인해주세요.
        </div>
        <div>
            <button onClick={blockTogleHandelr} >확인</button>
        </div>
    </div>
}

export default BlockMessage;