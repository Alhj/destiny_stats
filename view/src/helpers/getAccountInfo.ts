const getAccountInfo: (platformNumber:string, userName:string) => Promise<any> = async (platformNumber:string, userName:string) => {
  
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey:string | null = apiKeyRespons.headers.get('authorization');
  
  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`)

  const config = {
    headers:header
  }

  const accoutnData: Response = await fetch(`http://d9abae14.ngrok.io/character/${platformNumber}/${userName}`, config);
  
  //console.log(accoutnData);

  return 'hello';
};

export {
  getAccountInfo
};