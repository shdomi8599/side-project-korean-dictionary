import { useNavigate, useSearchParams } from "react-router-dom"


const ChampCard = ({ PickChamp }) => {
    if (PickChamp.name === '누누와 윌럼프') {
        PickChamp.name = '누누'
    }
    if (PickChamp.name === '트위스티드 페이트') {
        PickChamp.name = '트 페'
    }
    if (PickChamp.name === '레나타 글라스크') {
        PickChamp.name = '레나타'
    }
    if (PickChamp.name === '아우렐리온 솔') {
        PickChamp.name = '솔'
    }
    if (PickChamp.name === '블리츠크랭크') {
        PickChamp.name = '블리츠'
    }

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();



    return <div className="champ_card" onClick={() => {
        navigate(`/champFeedback/${PickChamp.key}`,
            {
                state: {
                    ...PickChamp,
                }
            })
    }}>
        <div>
            <img className="champ_img" src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${PickChamp.image.full}`} />
        </div>
        <div className="champ_name">
            {PickChamp.name}
        </div>
    </div>
}

export default ChampCard