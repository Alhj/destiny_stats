const getAccountInfo: (platformNumber:string, userName:string) => Promise<any> = async (platformNumber:string, userName:string) => {
  const accoutnData:any = await fetch(`http://d9abae14.ngrok.io/character/${platformNumber}/${userName}`);
  
  console.log(accoutnData);

  return 'hello';
};

export {
  getAccountInfo
};