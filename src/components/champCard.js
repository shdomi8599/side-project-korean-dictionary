const ChampCard = ({ onepick }) => {

    return <div className="champ_card">
        <div>
            <img className="champ_img" src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${onepick.image.full}`} />
        </div>
        <div>
            {onepick.name}
        </div>
        <div>
            {onepick.tags.map((tag,idx)=>{
                return (
                    <span key={idx} tag={tag}>{tag}&nbsp;</span>
                )
            })}
        </div>
    </div>
}

export default ChampCard