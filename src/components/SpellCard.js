import { useState } from 'react';

const SpellCard = () => {



    return <div className='spell_card'>
        <div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerBarrier.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerBoost.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerDot.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerExhaust.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerFlash.png')} alt="" />
            </div>
        </div>
        <div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerHaste.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerHeal.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerMana.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerSmite.png')} alt="" />
            </div>
            <div className='spell_box'>
                <img className="spell" src={require('../img/spell/SummonerTeleport.png')} alt="" />
            </div>
        </div>
    </div>
}

export default SpellCard;