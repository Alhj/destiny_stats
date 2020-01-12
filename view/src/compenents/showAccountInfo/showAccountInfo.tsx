import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import Loading from "../loading/loading";
import ShowAllTimeStats from "../showAllTimeStats/showAllTimeStats";
import { getAccountInfo, getAccountStats } from "../../helpers/getAccountInfo";
import { allCharactersStats } from "../../types/types";
import { characters, errorInFetch } from "../../types/types";
import { genereateTemplete } from "../../helpers/genereateTemplete/generateAllStatsMocObject";
import "./showAccountInfo.css";

const url: string = "https://www.bungie.net";

const ShowAccountInfo: () => JSX.Element = () => {
  const firstChar: characters = {
    emblemBackgroundPath: "",
    classType: 0,
    light: 0
  };

  const [isLoading, setIsLoading] = useState(false);
  const [accountCharacters, setAccountCharacters] = useState([firstChar]);
  const [allStats, setAllStats] = useState(genereateTemplete());
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
      history.push('/');
    }

    const stats: allCharactersStats = await getAccountStats(
      platformNumber,
      accountName
    );

    setAccountCharacters(charInfo as characters[]);
    setAllStats(stats);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loading();
    }
    console.log("update");
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

  return (
    <div>
      <div className="">{chars}</div>
      <ShowAllTimeStats stats={allStats} />
    </div>
  );
};

export default ShowAccountInfo;
