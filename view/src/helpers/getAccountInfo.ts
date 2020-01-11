import {characters, respons} from '../types/types';
import {responsAllChars} from '../types/types';

const getAccountInfo = async (platformNumber:string | undefined, accountName:string| undefined) => {
  
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey:string | null = apiKeyRespons.headers.get('authorization');
  
  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`)

  const config = {
    headers:header
  }
  const accoutnData:respons = await fetch(`/character/${platformNumber}/${accountName}`, config).then(res => res.json());
  
  const chars:characters[] = accoutnData.characters

  return chars;
};


const getAccountStats = async (platformNumber:string | undefined, userName:string | undefined) => {
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey:string | null = apiKeyRespons.headers.get('authorization');
  
  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`);

  const config = {
    headers:header
  };

  const accoutnData:responsAllChars = await fetch(`/stats/${platformNumber}/${userName}`, config).then(res => res.json());
  return accoutnData.Response
}

export {
  getAccountInfo,
  getAccountStats
};