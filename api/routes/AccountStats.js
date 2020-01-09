require('dotenv').config()
const side = require('express').Router()

const apiKey = require('../lib/apiKey/apiKey')
const getAccountStats = require('../lib/fetch/getAccountStats')

side.route('/:membershipType/:membershipId')
  .get((req,res) => {
    if(req.header('authorization') && apiKey.checkKey(req.header('authorization').substring(7))) {
    
      const accountStats = getAccountStats(req.params.membershipType,req.params.membershipId);
    
      res.status(200).send();
    } else {
      const obj = {
        status:403,
        message: 'no api key in the header or modife key'
      }

      res.status(403).send(obj);
    }
  })