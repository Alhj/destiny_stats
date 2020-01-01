import React, { useState } from 'react';

const StartSearch:(props:any) => JSX.Element = (props) => {
  const[platform, setplatformor] = useState('steam');
  const[platformNumber, setPlatformorNumber] = useState('4');
  const[userName, setUserName] = useState('');
  
  const handleChange:(event:React.ChangeEvent<HTMLSelectElement>) => void = (event:React.ChangeEvent<HTMLSelectElement>) => {
    
    const formatAndNumber:string[] = event.target.value.split(' ');
    
    console.log(formatAndNumber[0]);
    console.log(formatAndNumber[1]);

    setplatformor(formatAndNumber[0]);
    setPlatformorNumber(formatAndNumber[1]);
  }


  const handleInputChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  return(
  <div>
    <h1>account name</h1>
    <p>{platform} number:{platformNumber}</p>
    <form onSubmit={e => console.log(e)}>
      <input id='playerSearch' type='text' value={userName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}/>
      <select onChange={(event:React.ChangeEvent<HTMLSelectElement>) => handleChange(event)} value={platform}>
        <option value={['steam 3']}>steam</option>
        <option value={['xbox 1']}>xbox</option>
        <option value={['ps4 2']}>ps4</option>
      </select>

      <br/>
      <input type="submit" value='submit'/>
    </form>
  </div>
  );
};


export default StartSearch;