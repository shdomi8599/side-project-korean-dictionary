import React from "react";

const MiniItem = ({ pickedItem }) => {
    return <span className="mini_item">
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${pickedItem}.png`} alt="" />
    </span>
}

export default MiniItem;