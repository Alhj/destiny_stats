import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import {getAccountInfo} from '../../helpers/getAccountInfo';
import {characters} from '../../types/types';

const ShowAccountInfo:(props:any) => JSX.Element = (props) => {

  const firstChar:characters = {
   emblemBackgroundPath: '',
   classType: 0,
   light: 0 
  }

  const[isLoading, setIsLoading] = useState(false);
  const[characters, setCharacters] = useState([firstChar]);
  
  const classType: (classType:number) => string = (classType:number) => {
    switch (classType) {
      case 0:
        return 'Titan';
        break;
      case 1: 
      return 'Hunter'
      break;
      case 2:
      return 'Warlock' 
      break
      default: 
      return 'no class found'
      break;
    }
  } 

  const loading = async () => {
    const charInfo:characters[] = await getAccountInfo('3', 'Gauntlet Of Thanos')
    
    setCharacters(charInfo);
    setIsLoading(true);
  }

  useEffect(() => {
    loading();
  });

  if(isLoading) {

    const chars = characters.map(character => 
      <div key={character.classType}>
        <p>{character.light}</p>
        <p>{classType(character.classType)}</p>
      </div>
      ) 

    return(
      <div>
        {chars}
      </div>
    )
  } else {
    return(
      <Loading/>
    )
  }
}

export default ShowAccountInfo;