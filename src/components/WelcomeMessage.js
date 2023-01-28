import { useNavigate } from "react-router-dom";

const WelcomeMessage = ({ message, idVal }) => {
    const navigate = useNavigate()
    let userDataArr = [];

    //메세지에 따라 버튼 이벤트를 다르게 설정
    let btnEvent;

    if (message === '가입') {
        btnEvent = () => { navigate('/login') }
    }
    if (message === '로그인') {
        if (localStorage.checkLogin === undefined) {
            localStorage.setItem('checkLogin', JSON.stringify([{ id: idVal, isLogin: true }]))
        } else {
            userDataArr = JSON.parse(localStorage.checkLogin)
            userDataArr.push({ id: idVal, isLogin: true })
            localStorage.setItem('checkLogin', JSON.stringify(userDataArr))
        }

        btnEvent = () => { navigate('/') }
    }
    return <div className="welcome_message">
        <div>
            {message}을 환영합니다
        </div>
        <div>
            <button onClick={btnEvent}>확인</button>
        </div>
    </div>
}

export default WelcomeMessage;