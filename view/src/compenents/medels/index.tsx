import React from "react";
import "./style.css";

const Medels = () => {
  return (
    <div className="medel">
      <h2>Medles</h2>
      <div className="medels">
        <div className="medelsComponent">
          <img
            src="https://www.bungie.net/common/destiny2_content/icons/4f856cbc4a8d41d44167a05590e82251.png"
            alt="medalAvenger"
          />
          <h3>Blood For Blood: 0</h3>
        </div>
        <div className="medelsComponent">
          <img
            src="https://www.bungie.net/common/destiny2_content/icons/be5d7d9679dade775943589ac5d50791.png"
            alt="medalPayback"
          />
          <h3>Best Served Cold: 0</h3>
        </div>
        <div className="medelsComponent">
          <img
            src="https://www.bungie.net/common/destiny2_content/icons/icon_mdbab442edbc7e7ecd6a56f5ac1b1dd47.png"
            alt="medalStreak5x"
          />
          <h3>Ruthless: 0</h3>
        </div>
        <div>
          <img
            src="https://www.bungie.net/common/destiny2_content/icons/icon_m67b503f29d3f1a739f88f9ae8371c1ec.png"
            alt="medalStreak10x"
          />
          <h3>Unyielding: 0</h3>
        </div>
      </div>
    </div>
  );
};

export default Medels;
