const getAccountInfo: (platformNumber:string, userName:string) => Promise<any> = async (platformNumber:string, userName:string) => {
  
  let config:RequestInit = {
    method:'GET',
    mode: 'cors'
  }

  const apiKeyRespons: Response = await window.fetch('https://ca6645d1.ngrok.io/apiKey', config);

  const key:string | null = apiKeyRespons.headers.get('authorization');

  console.log(key);

  //const accoutnData: Response = await fetch(`http://d9abae14.ngrok.io/character/${platformNumber}/${userName}`);
  
  //console.log(accoutnData);

  return 'hello';
};

export {
  getAccountInfo
};