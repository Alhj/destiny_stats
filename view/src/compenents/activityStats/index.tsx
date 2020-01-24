import React from 'react';
import { activityPvEPVP } from '../../types/types';

interface stats {
  stats:activityPvEPVP
}

const ActivityStats = (props:stats) => {
  
  const activity = props.stats.pvp

  console.log(activity);
  return(
    <div>
    </div>
  )
}



export default ActivityStats