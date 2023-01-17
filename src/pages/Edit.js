import { useNavigate, useSearchParams,useParams } from "react-router-dom"

const Edit = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();

    // const id = searchParams.get('id')
    // console.log(id);

    // const mode = searchParams.get('mode')
    // console.log(mode)

    return (
        <div>
            <h1>이곳은 에딧</h1>
            <button >버튼</button>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default Edit