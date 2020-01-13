require('dotenv').config()

const fetch = require('node-fetch')

const searchPlayerProfil = async (membershipType, displayName) => {
  let url = 'https://www.bungie.net/Platform/'

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY,
    }
  }

  let respons = await fetch(url + `Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}`, config).then(res => res.json())
  return respons.Response[0].membershipId
}

module.exports = searchPlayerProfil