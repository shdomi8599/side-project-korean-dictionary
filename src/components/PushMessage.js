const PushMessage = ({ pushMessageHandler, result, cancle }) => {
    return <div className="confirm_message">
        <div className="confirm_message_box">
            피드백 내용을 간단하게 소개해주세요.
        </div>
        <div>
            <input type="text" placeholder="20글자 이내" id="push_input" maxlength='20'
                onChange={(e) => {
                    pushMessageHandler(e.target.value)
                }} />
        </div>
        <div className="confirm_boolean_box">
            <div>
                <button onClick={result}>네</button>
            </div>
            <div>
                <button onClick={cancle}>아니요</button>
            </div>
        </div>
    </div>
}

export default PushMessage;