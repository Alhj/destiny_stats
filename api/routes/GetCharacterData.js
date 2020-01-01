const side = require('express').Router()

side.route('/:platformNumber/:characterName')
  .get(async (req, res) => {
    console.log(req.params.characterName);
    res.status(401).send('hello world');
  })



  module.exports = side