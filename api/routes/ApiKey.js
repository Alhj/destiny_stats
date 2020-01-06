require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')

side.route('/')
  .get((req, res) => {

    const generatedApiKey = apiKey.genereateKey();
    
    res.header('authorization', 'Bearer ' + generatedApiKey)
    
    const obj = {
      text:'api key generate found in header',
    }

    res.status(200).send(obj);
  })

  module.exports = side