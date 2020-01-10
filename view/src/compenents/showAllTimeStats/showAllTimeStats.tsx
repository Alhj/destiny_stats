import React from 'react';
import {allCharactersStats} from '../../types/types';

interface propsInterface {
  stats:allCharactersStats
}

const showAllTimeStats = (props:propsInterface) => {
  
  return(
    <div className='cointener'>
      <div className='item'></div>
      <div className='item'></div>
      <div className='item'></div>
    </div>
  )
};


export default showAllTimeStats;