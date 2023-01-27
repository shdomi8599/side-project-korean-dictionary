import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockDisplay from "../components/BlockDisplay";
import BlockMessage from "../components/BlockMessage";
import WelcomeMessage from "../components/WelcomeMessage";

const Login = () => {
    const navigate = useNavigate();

    //아이디와 비밀번호 입력값을 받는 코드
    const [idVal, setIdVal] = useState('')
    const [pwVal, setPwVal] = useState('')

    const idValHandelr = (e) => {
        setIdVal(e.target.value)
    }
    const pwValHandelr = (e) => {
        setPwVal(e.target.value)
    }

    // 블락메세지를 띄우기 위한 코드

    const [blockMessage, setBlockMessage] = useState(false)

    const blockMessageHandelr = () => {
        setBlockMessage(!blockMessage)
    }

    //웰컴 메세지를 위한 코드
    const [welcome, setWelcome] = useState(false)

    const welcomeHandelr = () => {
        setWelcome(!welcome)
    }

    if (localStorage.currentId !== 'null') {
        return alert('이미 로그인 상태입니다')
    }

    //로그인을 시도할 떄를 위한 코드
    const loginEvent = () => {
        if (JSON.parse(localStorage.userData).filter(x => x.id === idVal && x.pw === pwVal).length === 1) {
            welcomeHandelr()
        }
        else if (JSON.parse(localStorage.userData).filter(x => x.id === idVal && x.pw === pwVal).length === 1) {
            blockMessageHandelr()
            return navigate('', { state: { message: '비밀번호를' } })
        }
        else if (JSON.parse(localStorage.userData).filter(x => x.id === idVal && x.pw === pwVal).length === 1) {
            blockMessageHandelr()
            return navigate('', { state: { message: '아이디와 비밀번호를' } })
        } else {
            blockMessageHandelr()
            return navigate('', { state: { message: '아이디와 비밀번호를' } })
        }
    }

    return <>
        {blockMessage && <BlockDisplay block={blockMessageHandelr} height={111} />}
        {blockMessage && <BlockMessage blockTogleHandelr={blockMessageHandelr} />}
        {welcome && <WelcomeMessage idVal={idVal} message={'로그인'} />}
        <div className="login">
            <div className="login_welcome">
                로그인
            </div>
            <div className="login_box">
                <div className="login_input_box">
                    <div className="login_input">
                        <div className="login_input_text">
                            아이디
                        </div>
                        <div>
                            <input name="id" value={idVal} onChange={idValHandelr} />
                        </div>
                    </div>
                    <div className="login_input">
                        <div className="login_input_text">
                            비밀번호
                        </div>
                        <div>
                            <input type="password" name="pw" value={pwVal} onChange={pwValHandelr} />
                        </div>
                    </div>
                </div>
                <div className="login_btn_box">
                    <button onClick={loginEvent}>확인</button>
                </div>
            </div>
        </div>
        <div className="back_img" id="login_back"></div>
    </>
}

export default Login;