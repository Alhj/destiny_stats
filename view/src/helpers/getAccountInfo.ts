import {characters, respons} from '../types/types';
import {responsAllChars, allCharactersStats} from '../types/types';

const getAccountInfo: (platformNumber:string, userName:string) => Promise<characters[]> = async (platformNumber:string, userName:string) => {
  
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey:string | null = apiKeyRespons.headers.get('authorization');
  
  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`)

  const config = {
    headers:header
  }
  const accoutnData:respons = await fetch(`/character/${platformNumber}/${userName}`, config).then(res => res.json());
  
  const chars:characters[] = accoutnData.characters

  return chars;
};


const getAccountStats:(platformNumber:string, userName:string) => Promise<allCharactersStats> = async (platformNumber:string, userName:string) => {
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