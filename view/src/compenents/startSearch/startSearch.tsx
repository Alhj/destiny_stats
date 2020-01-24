import React from "react";
import SearchBar from "../searchBar/searchBar";
import Select from '../select';
import "./startSearch.css";


const StartSearch: (props: any) => JSX.Element = props => {
  return (
    <div>
      <h1>account name</h1>
      <SearchBar />
      <Select />
    </div>
  );
};

export default StartSearch;
