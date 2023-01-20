

const MiniSpell = () => {

    return <span>
        <span className="mini_spell">
            <img src={JSON.parse(localStorage.getItem(`spell1${id}`)).src1} alt="" />
        </span>
        <span className="mini_spell">
            <img src={JSON.parse(localStorage.getItem(`spell2${id}`)).src2} alt="" />
        </span>
    </span>
}

export default MiniSpell