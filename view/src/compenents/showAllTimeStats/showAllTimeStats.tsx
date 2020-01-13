import React from "react";
import { allCharactersStats } from "../../types/types";

import "./showAllTimeStats.css";

interface propsInterface {
  stats: allCharactersStats;
}

const showAllTimeStats = (props: propsInterface) => {
  const pvpStats = props.stats.pvp.allTime;
  //const pveStats = props.stats.pve.allTime;

  return (
    <div>
      <div className="primary">
        <h2>priamary weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Handcanon kills: {pvpStats.weaponKillsHandCannon.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Sidearms: {pvpStats.weaponKillsSideArm.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Scout rifle kills: {pvpStats.weaponKillsScoutRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Pulse rifle kills: {pvpStats.weaponKillsPulseRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Auto rifle kills: {pvpStats.weaponKillsAutoRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Bow Kills: {pvpStats.weaponKillsBow.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Submachine gun kills:
              {pvpStats.weaponKillsSubmachinegun.basic.value}
            </h3>
          </div>
        </div>
      </div>
      <div className="special">
        <h2> special weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Sniper rifle kills: {pvpStats.weaponKillsSniper.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Fusion rifle kills: {pvpStats.weaponKillsFusionRifle.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Shotgun kills: {pvpStats.weaponKillsShotgun.basic.value}</h3>
          </div>
        </div>
      </div>
      <div className="heavy">
        <h2>heavy weapon</h2>
        <div className="cointener">
          <div className="item">
            <h3>
              Rocket launchers kills:{" "}
              {pvpStats.weaponKillsRocketLauncher.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>Swords kills: {pvpStats.weaponKillsSword.basic.value}</h3>
          </div>
          <div className="item">
            <h3>
              Machinegun kills: {pvpStats.weaponKillsMachineGun.basic.value}
            </h3>
          </div>
          <div className="item">
            <h3>
              Grenade launcher kills:{" "}
              {pvpStats.weaponKillsGrenadeLauncher.basic.value}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showAllTimeStats;
