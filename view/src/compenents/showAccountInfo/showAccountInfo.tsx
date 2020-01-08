import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import {getAccountInfo} from '../../helpers/getAccountInfo';
import {characters} from '../../types/types';
import './showAccountInfo.css'

const url:string = 'https://www.bungie.net'

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
      case 1: 
      return 'Hunter'
      case 2:
      return 'Warlock' 
      default: 
      return 'no class found' 
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
      </div>
    )
  } else {
    return(
      <Loading/>
    )
  }
}

export default ShowAccountInfo;