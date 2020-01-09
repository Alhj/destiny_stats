require('dotenv').config()
const fetch = require('node-fetch');


const getAccountData = async (membershipType, membershipId) => {
  const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/${membershipId}/stats/?groups=2`

  let config = {
    headers:{
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY,
    }
  }


  const respons = await fetch(url,config);

  return respons.Respons
}

module.exports = getAccountData