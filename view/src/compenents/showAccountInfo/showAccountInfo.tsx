import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import {getAccountInfo} from '../../helpers/getAccountInfo';



const ShowAccountInfo:(props:any) => JSX.Element = (props) => {


  const[isLoading, setIsLoading] = useState(false);

  if(isLoading) {
    return(
      <div>
        <h1>test</h1>
      </div>
    )
  } else {
    return(
      <Loading/>
    )
  }
}

export default ShowAccountInfo;