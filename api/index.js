const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3080
const node_env = process.env.NODE_ENV || 'development'

const whiteList = ['http://destinystatsview.herokuapp.com/', 'http://localhost:3000/']

const corsOptions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allwed bt CORS'))
    }
  }
}

app.use(cors())

app.use('/character', cors(corsOptions), require('./routes/CharacterData'))
app.use('/apiKey', cors(corsOptions), require('./routes/ApiKey'))
app.use('/stats', cors(corsOptions), require('./routes/AccountStats'))
app.use('/profil', cors(corsOptions), require('./routes/accountProfil'))

app.listen(port, () => console.log(`listen on port: ${port}`))