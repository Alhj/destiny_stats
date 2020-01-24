import React from "react";
import { activityPvEPVP } from "../../types/types";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStats = (props: stats) => {
  const activity = props.stats.pvp;

  console.log(activity);
  return (
    <div>
      <p>activity enter: {activity.activitiesEntered}</p>
      <p>total kills: {activity.kills}</p>
      <p>kd: {activity.killsDeathsRatio}</p>
    </div>
  );
};

export default ActivityStats;
