require('dotenv').config()
const side = require('express').Router()

const getPlayerProfil = require('../lib/fetch/getPlayerProfil');
const getCharacterData = require('../lib/fetch/getCharacterData');
const apiKey = require('../lib/apiKey/apiKey');

side.route('/:membershipType/:displayName')
  .get(async (req, res) => {

      const token = req.header('authorization').substring(7)

      if(req.header('authorization') && apiKey.checkKey(req.header('authorization').substring(7))) {
        
        const playerProfil = await getPlayerProfil(req.params.membershipType, req.params.displayName);

        const characters = []

        for(let x = 0; x < playerProfil.data.characterIds.length; x++) {
          const character = await getCharacterData(req.params.membershipType, playerProfil.data.userInfo.membershipId, playerProfil.data.characterIds[x]);

          characters.push(character);
        }
        const obj = {
          statusCode: 200,
          message:'your character information',
          character: characters
        }

        res.status(200).send(obj);
      } else {

        const obj = {
          statusCode: 403,
          message: 'no api key in header',
        }

        res.status(403).send(obj);
      }
  })



  module.exports = side