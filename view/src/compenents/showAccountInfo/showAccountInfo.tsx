import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import {getAccountInfo} from '../../helpers/getAccountInfo';


const ShowAccountInfo:(props:any) => JSX.Element = (props) => {


  const[isLoading, setIsLoading] = useState(true);

  return(
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default ShowAccountInfo;