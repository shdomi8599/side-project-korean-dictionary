import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {

  const navigate = useNavigate()
    return <div className="welcome_message">
        <div>
            가입을 환영합니다
        </div>
        <div>
            <button onClick={()=>navigate('/')}>확인</button>
        </div>
    </div>
}

export default WelcomeMessage;