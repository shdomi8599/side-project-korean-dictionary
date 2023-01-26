import { useRef, useState } from "react";

const SignUpDefalut = ({ value, type,userDataHandeler }) => {

    // valChange를 통해 데이터에 맞는 이벤트핸들러를 부여하는 코드
    //원래는 상위 컴포넌트에서 내려보냈으나 랜더링 문제가 일어나서 하위로 내렸음.... 무조건 상위가 좋은게 아니었나봄
    const [idData, setIdData] = useState('')
    const [pwData, setPwData] = useState('')
    const [pwcData, setPwcData] = useState('')
    const [emailData, setEmailData] = useState('')

    const handelerSet = {
        id: (x) => {
            setIdData(x)
        },
        pw: (x) => {
            setPwData(x)
        },
        pwc: (x) => {
            setPwcData(x)
        },
        email: (x) => {
            setEmailData(x)
        }
    }

    const valChange = handelerSet[value]

    //valObj를 통해 defaultVal를 각자 설정하고 각 데이터이름에 맞는 값을 저장하는 코드

    const valObj = {
        id: '아이디',
        pw: '비밀번호',
        pwc: '비밀번호 확인',
        email: '이메일'
    }

    let defaultVal = valObj[value]

    const [inputVal, setInputVal] = useState('')

    const inputValHandler = (e) => {
        setInputVal(e.target.value)
        valChange(e.target.value)
        userDataHandeler(e)
    }

    return <div className="sign_up_content">
        <div className="sign_up_dafault">
            {defaultVal}
        </div>
        <div>
            <input className="sign_up_input" type={type} name={value} value={inputVal} onChange={inputValHandler} />
        </div>
    </div>
}

export default SignUpDefalut;