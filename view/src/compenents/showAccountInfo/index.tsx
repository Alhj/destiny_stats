import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import Loading from "../loading";
import ShowAllTimeStats from "../showAllTimeStats";
import ActivityStats from "../activityStatsPvP";
import { getAccountInfo, getAccountStats } from "../../helpers/getAccountInfo";
import { characters, errorInFetch } from "../../types/types";
import {
  genereateTempleteWeaponStats,
  genereateTempleteActivity
} from "../../helpers/genereateTemplete/generateAllStatsMocObject";
import "./showAccountInfo.css";

const url: string = "https://www.bungie.net";

const ShowAccountInfo = () => {
  const firstChar: characters = {
    emblemBackgroundPath: "",
    classType: 0,
    light: 0
  };

  const [isLoading, setIsLoading] = useState(false);
  const [accountCharacters, setAccountCharacters] = useState([firstChar]);
  const [weaponsStats, setWeaponsStats] = useState(genereateTempleteWeaponStats());
  const [activityStats, setActivityStats] = useState(genereateTempleteActivity());
  const [witchStats, setWitchStats] = useState(true);
  const { platformNumber, accountName } = useParams();

  const history = useHistory();

  const classType: (classType: number) => string = (classType: number) => {
    switch (classType) {
      case 0:
        return "Titan";
      case 1:
        return "Hunter";
      case 2:
        return "Warlock";
      default:
        return "no class found";
    }
  };

  const loading = async () => {
    const charInfo: characters[] | errorInFetch = await getAccountInfo(
      platformNumber,
      accountName
    );

    if ((charInfo as errorInFetch).error) {
      history.push("/");
    }

    const stats = await getAccountStats(platformNumber, accountName);
    console.log(stats);
    setAccountCharacters(charInfo as characters[]);
    setWeaponsStats(stats.weaponStats);
    setActivityStats(stats.activityStats);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loading();
      document.title = 'Destiny Stats'
    }
  });

  if (!isLoading) {
    return <Loading />;
  }

  const chars = accountCharacters.map(accountCharacter => (
    <div
      className="emblem"
      style={{
        backgroundImage:
          "url(" + url + accountCharacter.emblemBackgroundPath + ")",
        backgroundRepeat: "no-repeat"
      }}
      key={accountCharacter.classType}
    >
      <div className="characterInfo">
        <h1 className="characterLigth">✦{accountCharacter.light}</h1>
        <h2 className="characterClassType">
          {classType(accountCharacter.classType)}
        </h2>
      </div>
    </div>
  ));

  const showWitchStats = () => {
    if (witchStats) {
      return <ShowAllTimeStats stats={weaponsStats.pvp.allTime} />;
    } else {
      return <ShowAllTimeStats stats={weaponsStats.pve.allTime} />;
    }
  };

  const changeAcctivity = (change: boolean) => {
    if (change) {
      setWitchStats(true);
    } else {
      setWitchStats(false);
    }
  };

  return (
    <div>
      <div className="">{chars}</div>
      <ActivityStats stats={activityStats} />
      <div className="activitySelect">
        <h3
          style={{ backgroundColor: witchStats ? "white" : "darkgrey" }}
          onClick={() => changeAcctivity(true)}
        >
          PvP
        </h3>
        <h3
          style={{ backgroundColor: witchStats ? "darkgrey" : "white" }}
          onClick={() => changeAcctivity(false)}
        >
          PvE
        </h3>
      </div>
      {showWitchStats()}
    </div>
  );
};

export default ShowAccountInfo;
