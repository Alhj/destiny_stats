import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './startSearch.css'

const StartSearch:(props:any) => JSX.Element = (props) => {
  const[platform, setplatformor] = useState('steam');
  const[platformNumber, setPlatformorNumber] = useState('3');
  const[userName, setUserName] = useState('');
  const[redirect, setRedirect] = useState(false);
  
  const handleChange:(event:React.ChangeEvent<HTMLSelectElement>) => void = (event:React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const formatAndNumber:string[] = event.target.value.split(' ');

    setplatformor(formatAndNumber[0]);
    setPlatformorNumber(formatAndNumber[1]);
  }


  const handleInputChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const handelSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRedirect(true);
  }

  if(redirect) {
    const url = `/account/${platformNumber}/${userName}/`
    
    return <Redirect to={url}/>
  } else {
    return(
    <div>
      <h1>account name</h1>
      <p>{platform} number:{platformNumber}</p>
      <div className='searchForm'>
        <form onSubmit={handelSubmit}>
          <select onChange={event => handleChange(event)}>
              <option selected={platform === 'steam'} value={['steam 3']}>steam</option>
              <option selected={platform === 'xbox'} value={['xbox 1']}>xbox</option>
              <option selected={platform === 'ps4'} value={['ps4 2']}>ps4</option>
            </select>
            <input id='playerSearch' type='text' value={userName} placeholder='serach...' onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}/>
        </form>
      </div>
    </div>
    );
  }
};


export default StartSearch;