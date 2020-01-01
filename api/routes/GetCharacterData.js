require('dotenv').config()
const side = require('express').Router()
const fetch = require('node-fetch')

side.route('/:platformNumber/:accountName')
  .get(async (req, res) => {

    let url = 'https://www.bungie.net/Platform/'

    let config = {
      headers:{
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
      }
    }
   
    let respons = await fetch(url + `Destiny2/SearchDestinyPlayer/${req.params.platformNumber}/${req.params.accountName}`, config).then(res => res.json())

    console.log(respons)

   // respons = await fetch(url + `/Destiny2/${req.params.platformNumber}/Profile/${memberId}/ `, config).then(res => res.json())

    //console.log(respons);

    res.status(401).send('hello world');
  })



  module.exports = side