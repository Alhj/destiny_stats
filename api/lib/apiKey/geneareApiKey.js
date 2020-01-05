require('dotenv').config()
const jst = require('jsonwebtoken');

const genereateKey = () => {
  const secret = process.env.SECREAT
  const data = process.env.DATA


  const token = jst.sign({data:data},secret, {expiresIn:60})

  return token
}

module.exports = {
  genereateKey
}