require('dotenv').config()
const fetch = require('node-fetch');


const getAccountData = async (membershipType, membershipId) => {
  const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Stats/?groups=2`

  let config = {
    headers:{
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY,
    }
  }


  const respons = await fetch(url,config).then(res => res.json());

  return respons.Response
}

const getAccountDataActivty = async (membershipType, membershipId) => {
  const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Stats/?groups=1`

  let config = {
    headers:{
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY,
    }
  }


  const respons = await fetch(url,config).then(res => res.json());

  return respons.Response.mergedAllCharacters.results
}


module.exports = {
  getAccountData,
  getAccountDataActivty
}