require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')
const getAccountStats = require('../lib/fetch/getAccountStats')

side.route('/:membershipType/:membershipId')
  .get(async (req, res) => {
    if (req.header('authorization') && apiKey.checkKey(req.header('authorization').substring(7))) {

      try {

        const accountStats = await getAccountStats.getAccountData(req.params.membershipType, req.params.membershipId)

        const accountAcctivtyStats = await getAccountStats.getAccountDataActivty(req.params.membershipType, req.params.membershipId)

        const obj = {
          statusCode: 200,
          message: 'account stats from bungie api',
          Response: {
            weaponStats: {
              pve: accountStats.mergedAllCharacters.results.allPvE,
              pvp: accountStats.mergedAllCharacters.results.allPvP,
              charactersStats: accountStats.mergedAllCharacters.characters
            },
            activityStats: accountAcctivtyStats
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

    } else {
      const obj = {
        status: 403,
        message: 'no api key in the header or modife key'
      }

      res.status(403).send(obj);
    }
  })


module.exports = side