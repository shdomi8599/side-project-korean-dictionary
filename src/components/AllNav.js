import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import ConfirmMessage from "./ConfirmMessage";
import BlockDisplay from "./BlockDisplay";
import BlockMessage from "./BlockMessage";


const AllNav = () => {

    //모든 피드백 삭제 버튼을 위한 코드
    const [resetTogle, setResetTogle] = useState(false);
    const navigate = useNavigate();

    const resetTogleHandler = () => {
        setResetTogle(!resetTogle)
    }

    const resetBtn = () => {
        navigate('/')
        localStorage.clear()
        setResetTogle(!resetTogle)
    }

    //로그아웃 이벤트
    const logoutEvent = () => {
        localStorage.removeItem('checkLogin')
        setBlock(!block)
    }

    const [block, setBlock] = useState()
    const blockHandelr = () => {
        setBlock(!block)
        navigate('', { state: { message: '다음에 다시 만나요!' } })
    }

    return <nav className="navbar navbar-expand-lg bg-dark">
        {resetTogle &&
            <>
                <ConfirmMessage message={'모든 피드백을 삭제'} result={resetBtn} cancle={resetTogleHandler} />
                <BlockDisplay block={resetTogleHandler} />
            </>
        }
        {block &&
            <>
                <BlockMessage blockTogleHandelr={logoutEvent} />
                <BlockDisplay block={logoutEvent} />
            </>}
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand"><span>League Of Legends 피드백</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/myFeedback"} className="nav-link active"><span>나만의 피드백</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/board"} className="nav-link active"><span>피드백 공유하기</span></Link>
                    </li>
                    {localStorage.checkLogin === undefined ?
                        <>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link active"><span>로그인</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signUp"} className="nav-link active"><span>회원가입</span></Link>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <div className="nav-link active" id="nav_div" onClick={blockHandelr}><span>로그아웃</span></div>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    </nav>
}

export default AllNav