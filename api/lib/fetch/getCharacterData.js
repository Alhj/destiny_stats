require('dotenv').config()
const fetch = require('node-fetch');


const getCharacterData = async (membershipType, membershipId, characterId) => {
  let url = 'https://www.bungie.net/Platform/'

    let config = {
      headers:{
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
      }
    }

    const character = await fetch(url + `/Destiny2/${membershipType}/Profile/${membershipId}/Character/${characterId}/?components=200`, config).then(res => res.json());

    return character.Response.character.data;
}

module.exports = getCharacterData 