const ConfirmMessage = ({message,result,cancle}) => {
    return <div className="confirm_message">
        <div className="confirm_message_box">
            {`정말 ${message} 할까요?`}
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

export default ConfirmMessage