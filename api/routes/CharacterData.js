require('dotenv').config()
const side = require('express').Router()

const getPlayerProfil = require('../lib/fetch/getPlayerProfil');
const getCharacterData = require('../lib/fetch/getCharacterData');
const apiKey = require('../lib/apiKey/apiKey');

side.route('/:membershipType/:membershipId')
  .get(async (req, res) => {
      try {
        const playerProfil = await getPlayerProfil(req.params.membershipType, req.params.membershipId);

        const characters = []

        for (let x = 0; x < playerProfil.data.characterIds.length; x++) {
          const character = await getCharacterData(req.params.membershipType, playerProfil.data.userInfo.membershipId, playerProfil.data.characterIds[x]);

          characters.push(character);
        }
        const obj = {
          statusCode: 200,
          message: 'your character information',
          characters: characters
        }

        res.status(200).send(obj);
      } catch (e) {
        const obj = {
          statusCode:400,
          message:'',
          error: 1
        }

          res.status(400).send(obj)
      }
  })



module.exports = side