import { useEffect, useState } from "react"
import SignUpDefalut from "../components/SignUpDefalut"

const SignUp = () => {

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

    const toLocal = () => {
        //로컬데이터가 없다면
        if (localStorage.getItem('userData') === null) {
            if (userData.pw !== userData.pwc) {
                return alert('비밀번호가 서로 다릅니다.')
            }
            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true) {
                return alert('이메일 형식을 지켜주세요.')
            }
            localStorage.setItem('userData', JSON.stringify([userData]))
        }
        //로컬데이터가 있다면
        else {
            if (JSON.parse(localStorage.userData).filter(x => x.id === userData.id).length !== 0) {
                return alert('같은 아이디가 존재합니다')
            }
            if (userData.pw !== userData.pwc) {
                return alert('비밀번호가 서로 다릅니다.')
            }
            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true) {
                return alert('이메일 형식을 지켜주세요.')
            }
            const userDataAdd = JSON.parse(localStorage.userData)
            userDataAdd.push(userData)
            localStorage.setItem('userData', JSON.stringify(userDataAdd))
        }
    }

    return (
        <div className="sign_up">
            <div className="sign_up_box">
                <div className="sign_up_content" id="sign_up_welcome_box">
                    <div id="sign_up_welcome">
                        정보입력
                    </div>
                </div>
                <SignUpDefalut value={'id'} userDataHandeler={userDataHandeler} />
                <SignUpDefalut value={'pw'} type={'password'} userDataHandeler={userDataHandeler} />
                <SignUpDefalut value={'pwc'} type={'password'} userDataHandeler={userDataHandeler} />
                <SignUpDefalut value={'email'} userDataHandeler={userDataHandeler} />
                <div className="sign_up_content" id="sign_up_btn_box">
                    <button onClick={toLocal}>가입하기</button>
                </div>
            </div>
            <div className="back_img" id="sign_back"></div>
        </div>
    )
}

export default SignUp