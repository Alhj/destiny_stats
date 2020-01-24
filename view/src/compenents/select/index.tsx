import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";
interface redux {
  platform: string;
  platformNumber: number;
}

const Select = () => {
  const showList = useState(false);
  const platform = useSelector((stats: redux) => {
    return stats.platform;
  });

  const onClick = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <ul>
        <p>{platform}</p>
        <li>
          <p onClick={() => onClick("STEAM")}>Steam</p>
        </li>
        <li>
          <p onClick={() => onClick("XBOX")}> Xbox</p>
        </li>
        <li>
          <p onClick={() => onClick("PS4")}>Ps4</p>
        </li>
      </ul>
    </div>
  );
};

export default Select;
