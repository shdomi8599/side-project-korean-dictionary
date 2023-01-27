import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import BlockDisplay from "../components/BlockDisplay";
import BlockMessage from "../components/BlockMessage";
import SignUpDefalut from "../components/SignUpDefalut"
import WelcomeMessage from "../components/WelcomeMessage";

const SignUp = () => {

    const navigate = useNavigate();
    //데이터를 입력하면 저장하도록 도와주는 코드
    const [userData, setUserData] = useState({
        id: '',
        pw: '',
        pwc: '',
        email: ''
    });

    const userDataHandeler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    console.log(userData)

    //버튼을 클릭하면 마지막으로 유효성 검사를 실행하고 데이터를 로컬에 저장하도록 도와주는 코드
    const toLocal = () => {
        //로컬데이터가 없다면
        if (localStorage.getItem('userData') === null) {
            if (userData.id === '') {
                blockTogleHandelr()
                return navigate('', { state: { message: '아이디를' } })
            }
            if (userData.pw === '') {
                blockTogleHandelr()
                return navigate('', { state: { message: '비밀번호를' } })
            }
            if (userData.pw !== userData.pwc) {
                blockTogleHandelr()
                return navigate('', { state: { message: '비밀번호를' } })
            }
            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true) {
                blockTogleHandelr()
                return navigate('', { state: { message: '이메일을' } })
            }
            localStorage.setItem('userData', JSON.stringify([userData]))
            welcomeTogleHandler()

        }
        //로컬데이터가 있다면
        else {
            if (userData.id === '') {
                blockTogleHandelr()
                return navigate('', { state: { message: '아이디를' } })
            }
            if (JSON.parse(localStorage.userData).filter(x => x.id === userData.id).length !== 0) {
                blockTogleHandelr()
                return navigate('', { state: { message: '아이디를' } })
            }
            if (userData.pw === '') {
                blockTogleHandelr()
                return navigate('', { state: { message: '비밀번호를' } })
            }
            if (userData.pw !== userData.pwc) {
                blockTogleHandelr()
                return navigate('', { state: { message: '비밀번호를' } })
            }
            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true) {
                blockTogleHandelr()
                return navigate('', { state: { message: '이메일을' } })
            }
            const userDataAdd = JSON.parse(localStorage.userData)
            userDataAdd.push(userData)
            localStorage.setItem('userData', JSON.stringify(userDataAdd))
            welcomeTogleHandler()
        }
    }

    //비밀번호가 서로 같은지 확인하기 위한 코드
    const [pwCheck, setPwCheck] = useState('')

    const pwCheckHandler = (e) => {
        setPwCheck(e.target.value)
    }

    //블락 메세지를 띄우기 위한 코드
    const [blockTogle, setBlockTogle] = useState(false)

    const blockTogleHandelr = () => {
        setBlockTogle(!blockTogle)
    }

    //웰컴 메시지를 띄우기 위한 코드
    const [welcomeTogle, setWelcomeTogle] = useState(false)

    const welcomeTogleHandler = () => {
        welcomeTogle ? navigate('/') : setWelcomeTogle(!welcomeTogle)
    }

    return (
        <div className="sign_up">
            {blockTogle &&
                <>
                    <BlockMessage blockTogleHandelr={blockTogleHandelr} />
                    <BlockDisplay block={blockTogleHandelr} height={111} />
                </>
            }
            {welcomeTogle &&
                <>
                    <WelcomeMessage blockTogleHandelr={welcomeTogleHandler} />
                    <BlockDisplay block={welcomeTogleHandler} height={111} />
                </>
            }
            <div className="sign_up_box">
                <div className="sign_up_content" id="sign_up_welcome_box">
                    <div id="sign_up_welcome">
                        정보입력
                    </div>
                </div>
                <SignUpDefalut value={'id'} userDataHandeler={userDataHandeler} />
                <SignUpDefalut value={'pw'} type={'password'} userDataHandeler={userDataHandeler} pwCheckHandler={pwCheckHandler} />
                <SignUpDefalut value={'pwc'} type={'password'} userDataHandeler={userDataHandeler} pwCheck={pwCheck} />
                <SignUpDefalut value={'email'} userDataHandeler={userDataHandeler} />
                <div className="sign_up_content" id="sign_up_btn_box">
                    <button onClick={toLocal}>가입하기</button>
                </div>
            </div>
            <div className="back_img" id="sign_back"></div>
        </div>
    )
}

export default React.memo(SignUp)