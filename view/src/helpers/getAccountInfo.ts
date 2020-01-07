const getAccountInfo: (platformNumber:string, userName:string) => Promise<any> = async (platformNumber:string, userName:string) => {
  
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey:string | null = apiKeyRespons.headers.get('authorization');
  
  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`)

  const config = {
    headers:header
  }

  const accoutnData = await fetch(`/character/${platformNumber}/${userName}`, config).then(res => res.json());
  
  console.log(accoutnData);

  return 'hello';
};

export {
  getAccountInfo
};