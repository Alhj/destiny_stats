require('dotenv').config()
const side = require('express').Router()

const getPlayerProfil = require('../lib/fetch/getPlayerProfil');
const getCharacterData = require('../lib/fetch/getCharacterData');
const apiKey = require('../lib/apiKey/apiKey');

side.route('/:membershipType/:displayName')
  .get(async (req, res) => {

      console.log(req.header('authorization'))

      const playerProfil = await getPlayerProfil(req.params.membershipType, req.params.displayName);

      const characters = []

      for(let x = 0; x < playerProfil.data.characterIds.length; x++) {
        const character = await getCharacterData(req.params.membershipType, playerProfil.data.userInfo.membershipId, playerProfil.data.characterIds[x]);

        characters.push(character);
      }

      const json = JSON.stringify(characters);

      res.status(401).send(json);
    
  })



  module.exports = side