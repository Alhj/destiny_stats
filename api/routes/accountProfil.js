require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')

const searchPlayerProfil = require('../lib/fetch/searchPlayerProfil')

side.route('/:membershipType/:accountName')
  .get(async (req, res) => {
      try{
       const playerProfil = await searchPlayerProfil(req.params.membershipType, req.params.accountName)

        const obj = {
          statusCode: 200,
          message:'player profil found',
          Respons: playerProfil
        }

        res.status(200).send(obj);

      } catch (error) {
        const obj = {
          statusCode: 400,
          message: 'no user found',
          error: 1
        }

        res.status(400).send(obj)
      }
  })


  module.exports = side