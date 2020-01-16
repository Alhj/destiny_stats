require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')
const getPlayerProfil = require('../lib/fetch/getPlayerProfil')
const getAccountStats = require('../lib/fetch/getAccountStats')

side.route('/:membershipType/:membershipId')
  .get(async (req, res) => {
      try {

        const accountStats = await getAccountStats(req.params.membershipType, req.params.membershipId);

        const obj = {
          statusCode: 200,
          message: 'account stats from bungie api',
          Response: {
            pve: accountStats.mergedAllCharacters.results.allPvE,
            pvp: accountStats.mergedAllCharacters.results.allPvP,
            charactersStats: accountStats.mergedAllCharacters.characters
          }
        }


        res.status(200).send(obj);

      } catch (e) {

        const obj = {
          statusCode: 400,
          message: 'no user found',
          error: 1
        }

        res.status(400).send(obj)
      }
  })


module.exports = side