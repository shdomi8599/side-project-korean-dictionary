import React from "react";


const MiniSpell = ({id}) => {

    return <span>
        <span className="mini_spell">
            <img src={JSON.parse(localStorage.getItem(`spell1${id}`))} alt="" />
        </span>
        <span className="mini_spell">
            <img src={JSON.parse(localStorage.getItem(`spell2${id}`))} alt="" />
        </span>
    </span>
}

export default MiniSpell