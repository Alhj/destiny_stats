import React from 'react';
import {allCharactersStats} from '../../types/types';

interface propsInterface {
  stats:allCharactersStats
}

const showAllTimeStats = (props:propsInterface) => {
    const pvpStats = props.stats.pvp.allTime;
    const pveStats = props.stats.pve.allTime;


    console.log(pvpStats)
  return(
    <div className='cointener'>
      <div className='item'>
        <h2>Handcanon kills: {pvpStats.weaponKillsHandCannon.basic.value}</h2>
      </div>
      <div className='item'>
        <h2>Sidearms: {pvpStats.weaponKillsSideArm.basic.value}</h2>
      </div>
      <div className='item'>
        <h2>Sniper rifle kills: {pvpStats.weaponKillsSniper.basic.value}</h2>
      </div>
    </div>
  )
};


export default showAllTimeStats;