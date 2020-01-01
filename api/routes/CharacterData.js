require('dotenv').config()
const side = require('express').Router()

const getPlayerProfil = require('../lib/fetch/getPlayerProfil');
const getCharacterData = require('../lib/fetch/getCharacterData');

side.route('/:membershipType/:displayName')
  .get(async (req, res) => {

    const playerProfil = await getPlayerProfil(req.params.membershipType, req.params.displayName);

    const characters = []

    for(let x = 0; x < playerProfil.data.characterIds.length; x++) {
      const character = await getCharacterData(req.params.membershipType, playerProfil.data.membershipId, playerProfil.data.characterIds[x]);

      characters.push(character);
    }

    res.status(401).send('hello world');
  })



  module.exports = side