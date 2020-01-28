import React from "react";
import { activityPvEPVP } from "../../types/types";

interface stats {
  stats: activityPvEPVP;
}

const ActivityStatsPvE = (props: stats) => {
  const activity = props.stats.pve;

  return (
    <div>
      <h3>total kills: {activity.kills.basic.displayValue}</h3>
      <h3>precions kills: {activity.precisionKills.basic.displayValue}</h3>
  <h3>public events completed: {activity.publicEventsCompleted.basic.displayValue}</h3>
    </div>
  );
};

export default ActivityStatsPvE;
