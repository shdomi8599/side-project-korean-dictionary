import { Link } from "react-router-dom"
import React from "react"


const AllNav = () => {
    return <nav className="navbar navbar-expand-lg bg-dark">
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
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link active"><span>로그인</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={"/signUp"} className="nav-link active"><span>회원가입</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={"/"}className="nav-link active" onClick={()=>{
                        if(window.confirm('정말 초기화 하시겠습니까?')){
                            localStorage.clear()
                        }
                        }}><span>초기화하기</span></Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
}

export default React.memo(AllNav)