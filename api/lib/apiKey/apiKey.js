require('dotenv').config()
const jst = require('jsonwebtoken');

const genereateKey = () => {
  const secret = process.env.SECREAT
  const data = process.env.DATA


  const token = jst.sign({data:data},secret, { expiresIn: '1h' })

  return token
}

const checkKey = (key) => {
  try {
    const keyDecrypt = jst.decode(key, process.env.SECREAT)

    if(keyDecrypt.data === process.env.DATA) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  genereateKey,
  checkKey
}
