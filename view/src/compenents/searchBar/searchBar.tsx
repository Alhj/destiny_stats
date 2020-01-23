import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { steam } from "../../actions/Steam";
import { ps4 } from "../../actions/ps4";
import { xbox } from "../../actions/xbox";

import "./searchBar.css";

interface redux {
  platform: string;
  platformNumber: number;
}

const SearchBar: () => JSX.Element = () => {
  const [platformNumber, setPlatformorNumber] = useState("3");
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const platform = useSelector((state: redux) => {
    return state.platform;
  });

  const handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    switch (event.target.value) {
      case "STEAM":
        dispatch(steam());
        break;
      case "XBOX":
        dispatch(xbox());
        break;
      case "PS4":
        dispatch(ps4());
        break;
    }
  };

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(e.target.value);
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName("");
    history.push(`/getProfil/${platformNumber}/${userName}/`);
  };

  return (
    <div className="SearchBar">
      <h3>{platform}</h3>
      <form onSubmit={e => handelSubmit(e)}>
        <select onChange={event => handleChange(event)} value={platform}>
          <option value="STEAM">steam</option>
          <option value="XBOX">xbox</option>
          <option value="PS4">ps4</option>
        </select>
        <input
          className="playerSearch"
          type="text"
          value={userName}
          placeholder="serach..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchBar;
