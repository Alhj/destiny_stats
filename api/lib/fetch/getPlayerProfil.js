require('dotenv').config()
const fetch = require('node-fetch');

const getPlayerProfil = async (membershipType, membershipId) => {
    let url = 'https://www.bungie.net/Platform/'

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
      }
    }

    const respons = await fetch(url + `Destiny2/${membershipType}/Profile/${membershipId}/?components=100`, config).then(res => res.json());

    return respons.Response.profile
}

module.exports = getPlayerProfil