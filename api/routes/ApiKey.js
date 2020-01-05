require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')

side.route('/')
  .get((req, res) => {

    const generatedApiKey = apiKey.genereateKey();
      res.header('authorization', 'Bearer ' + generatedApiKey)
      res.header('Access-Control-Allow-Origin', 'https://ca6645d1.ngrok.io/')

      const obj = {
        text:'api key generate found in header',
      }

      res.status(401).send(obj);
  })

  module.exports = side