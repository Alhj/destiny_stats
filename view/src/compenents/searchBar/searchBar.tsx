import React, {useState} from 'react';


const SearchBar: () => JSX.Element = () => {
  const[platform, setplatformor] = useState('steam');
  const[platformNumber, setPlatformorNumber] = useState('3');
  const[userName, setUserName] = useState('');
  
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
  }

  return(
    <div>
      <form onSubmit={e => handelSubmit(e)}>
          <select onChange={event => handleChange(event)} value={platform}>
              <option value={['steam 3']}>steam</option>
              <option value={['xbox 1']}>xbox</option>
              <option value={['ps4 2']}>ps4</option>
            </select>
            <input id='playerSearch' type='text' value={userName} placeholder='serach...' onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}/>
        </form>
    </div>
  )
};



export default SearchBar;