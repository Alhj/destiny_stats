require('dotenv').config()
const fetch = require('node-fetch');


const getAccountMedels = async (membershipType, membershipId) => {
  const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Stats/?groups=3`

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY,
    }
  }


  const respons = await fetch(url, config).then(res => res.json());

  return respons.Response.mergedAllCharacters.results
}

module.exports = getAccountMedels
