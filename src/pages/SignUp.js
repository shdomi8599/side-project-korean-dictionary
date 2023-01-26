import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import SignUpDefalut from "../components/SignUpDefalut"

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

    //버튼을 클릭하면 유효성 검사를 실행하고 데이터를 저장하도록 도와주는 코드
    const toLocal = () => {
        //로컬데이터가 없다면
        if (localStorage.getItem('userData') === null) {
            if (userData.id === '')
                return alert('아이디를 입력해주세요.')

            if (userData.pw === '')
                return alert('비밀번호를 입력해주세요.')

            if (userData.pw !== userData.pwc)
                return alert('비밀번호가 서로 다릅니다.')

            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true)
                return alert('이메일 형식을 지켜주세요.')

            localStorage.setItem('userData', JSON.stringify([userData]))
        }
        //로컬데이터가 있다면
        else {
            if (userData.id === '')
                return alert('아이디를 입력해주세요.')

            if (JSON.parse(localStorage.userData).filter(x => x.id === userData.id).length !== 0)
                return alert('같은 아이디가 존재합니다')

            if (userData.pw === '')
                return alert('비밀번호를 입력해주세요.')

            if (userData.pw !== userData.pwc)
                return alert('비밀번호가 서로 다릅니다.')

            if (userData.email.includes('@') !== true || userData.email.includes('.') !== true)
                return alert('이메일 형식을 지켜주세요.')

            const userDataAdd = JSON.parse(localStorage.userData)
            userDataAdd.push(userData)
            localStorage.setItem('userData', JSON.stringify(userDataAdd))
            alert('회원가입을 축하합니다.')
            navigate('/')
        }
    }

   const [pwCheck,setPwCheck] =useState('')

   const pwCheckHandler = (e) =>{
    setPwCheck(e.target.value)
    console.log(pwCheck)
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
                <SignUpDefalut value={'pw'} type={'password'} userDataHandeler={userDataHandeler} pwCheckHandler={pwCheckHandler}/>
                <SignUpDefalut value={'pwc'} type={'password'} userDataHandeler={userDataHandeler} pwCheck={pwCheck}/>
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