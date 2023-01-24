import { useNavigate, useSearchParams } from "react-router-dom"
import React from "react"

const ChampCard = ({ PickChamp }) => {
    const navigate = useNavigate();
    // 긴 챔피언이름들을 짧게 조정하기 위한 코드
    const champinonName = {
        '누누와 윌럼프': '누누',
        '트위스티드 페이트': '트 페',
        '레나타 글라스크': '레나타',
        '아우렐리온 솔': '솔',
        '블리츠크랭크': '블리츠'
    }

    if (champinonName[PickChamp.name]) {
        PickChamp.name = champinonName[PickChamp.name]
    }

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

export default React.memo(ChampCard)