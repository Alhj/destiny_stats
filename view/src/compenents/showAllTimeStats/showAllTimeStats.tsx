import React from 'react';
import {allCharactersStats} from '../../types/types';

import './showAllTimeStats.css'

interface propsInterface {
  stats:allCharactersStats
}

const showAllTimeStats = (props:propsInterface) => {
    const pvpStats = props.stats.pvp.allTime;
    const pveStats = props.stats.pve.allTime;


    console.log(pveStats)
  return(
    <div>
      <div className='primary'>
        <div className='cointener'>
          <div className='item'>
            <h2>Handcanon kills: {pvpStats.weaponKillsHandCannon.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Sidearms: {pvpStats.weaponKillsSideArm.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Scout rifle kills: {pvpStats.weaponKillsScoutRifle.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Pulse rifle kills: {pvpStats.weaponKillsPulseRifle.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Auto rifle kills: {pvpStats.weaponKillsAutoRifle.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Bow Kills: {pvpStats.weaponKillsBow.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Submachine gun kills:{pvpStats.weaponKillsSubmachinegun.basic.value}</h2>
          </div>
        </div>
      </div>
      <div className='special'>
        <div className='cointener'>
          <div className='item'>
            <h2>Sniper rifle kills: {pvpStats.weaponKillsSniper.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Fusion rifle kills: {pvpStats.weaponKillsFusionRifle.basic.value}</h2>
          </div>
          <div className='item'>
            <h2>Shotgun kills: {pvpStats.weaponKillsShotgun.basic.value}</h2>
          </div>
        </div>
      </div>
    </div>
  )
};


export default showAllTimeStats;