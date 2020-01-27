import React from "react";
import { activityPvEPVP } from "../../types/types";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStats = (props: stats) => {
  const activity = props.stats.pvp;
  return (
    <div className='itemAcc'>
      <h3>
        activity enter: {activity.activitiesEntered ? activity.activitiesEntered.basic.value : 0}
      </h3>
      <h3>total kills: {activity.kills ? activity.kills.basic.value : 0}</h3>
      <h3>kd: {activity.killsDeathsRatio ? activity.killsDeathsRatio.basic.value : 0}</h3>
    </div>
  );
};

export default ActivityStats;
