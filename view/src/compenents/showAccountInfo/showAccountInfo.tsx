import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Loading from "../loading/loading";
import ShowAllTimeStats from "../showAllTimeStats/showAllTimeStats";
import { getAccountInfo, getAccountStats } from "../../helpers/getAccountInfo";
import { allCharactersStats } from "../../types/types";
import { characters } from "../../types/types";
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
  const {platformNumber, accountName} = useParams();

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
    const charInfo: characters[] = await getAccountInfo(
      platformNumber,
      accountName
    );
    const stats: allCharactersStats = await getAccountStats(
      platformNumber,
      accountName
    );

    setAccountCharacters(charInfo);
    setAllStats(stats);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loading();
    }
  });

  if (!isLoading) {
    return <Loading />;
  }

  const chars = accountCharacters.map(accountCharacter => (
    <div
      className="class"
      style={{
        backgroundImage: "url(" + url + accountCharacter.emblemBackgroundPath + ")",
        backgroundRepeat: "no-repeat"
      }}
      key={accountCharacter.classType}
    >
      <div className="">
        <h1 className="characterLigth">✦{accountCharacter.light}</h1>
        <h1 className="characterClassType">{classType(accountCharacter.classType)}</h1>
      </div>
    </div>
  ));

  return (
    <div>
      {chars}

      <ShowAllTimeStats stats={allStats} />
    </div>
  );
};

export default ShowAccountInfo;
