import { Link } from "react-router-dom"

const HeaderNav = () => {
    return <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link to={"/"} className="navbar-brand">League Of Legends 피드백</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/board"} className="nav-link active">공략게시판</Link>
          </li>
          <li className="nav-item">
           <Link to={"/myFeedback"} className="nav-link active">나만의 피드백</Link>
           </li>
          <li className="nav-item">
            <Link to={"/signUp"} className="nav-link active">회원가입</Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link active">로그인</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default HeaderNav