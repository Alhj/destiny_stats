require('dotenv').config()
const side = require('express').Router()
const fetch = require('node-fetch')

const getPlayerProfil = require('../lib/fetch/getPlayerProfil');


side.route('/:membershipType/:displayName')
  .get(async (req, res) => {

    await getPlayerProfil(req.params.membershipType, req.params.displayName);

    res.status(401).send('hello world');
  })



  module.exports = side