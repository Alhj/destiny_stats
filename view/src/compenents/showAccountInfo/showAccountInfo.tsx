import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';

import Loading from '../loading/loading';
import ShowAllTimeStats from '../showAllTimeStats/showAllTimeStats';
import {getAccountInfo, getAccountStats} from '../../helpers/getAccountInfo';
import {characters, allCharactersStats} from '../../types/types';
import {genereateTemplete} from '../../helpers/genereateTemplete/generateAllStatsMocObject';
import './showAccountInfo.css';


const url:string = 'https://www.bungie.net'

const ShowAccountInfo:() => JSX.Element = () => {

  const firstChar:characters = {
   emblemBackgroundPath: '',
   classType: 0,
   light: 0 
  }
  
  const[isLoading, setIsLoading] = useState(false);
  const[characters, setCharacters] = useState([firstChar]);
  const[allStats, setAllStats] = useState(genereateTemplete());
  
  const classType: (classType:number) => string = (classType:number) => {
    switch (classType) {
      case 0:
        return 'Titan';
      case 1: 
      return 'Hunter'
      case 2:
      return 'Warlock' 
      default: 
      return 'no class found' 
    }
  } 

  const loading = async () => {
    const charInfo:characters[] = await getAccountInfo('3', 'Gauntlet Of Thanos');
    const stats:allCharactersStats = await getAccountStats('3', 'Gauntlet Of Thanos');
    
    
    setCharacters(charInfo);
    setAllStats(stats);
    setIsLoading(true);
  }

  useEffect(() => {
    if(!isLoading) {
    loading();
    }
  });

  if(isLoading) {

    const chars = characters.map(character => 
      <div className='class' style={{backgroundImage: 'url('+ url + character.emblemBackgroundPath +')', backgroundRepeat:'no-repeat'}} key={character.classType}>
        <div className=''>
          <h1 className='characterLigth'>✦{character.light}</h1>
          <h1 className='characterClassType'>{classType(character.classType)}</h1>
        </div>
      </div>
      ) 

    return(
      <div>
        {chars}

        <ShowAllTimeStats stats={allStats}/>
      </div>
    )
  } else {
    return(
      <Loading/>
    )
  }
}

export default ShowAccountInfo;