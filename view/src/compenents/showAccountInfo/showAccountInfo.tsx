import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import {getAccountInfo} from '../../helpers/getAccountInfo';


const ShowAccountInfo:(props:any) => JSX.Element = (props) => {


  const[isLoading, setIsLoading] = useState(false);

  
  const loading = async () => {
    const accountInfo = await new Promise((resolve, rejects) => {
      setTimeout(() => {
        resolve('hello');
      }, 3000)
    })

    setIsLoading(true);
  }

  useEffect(() => {
    loading();
  });

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