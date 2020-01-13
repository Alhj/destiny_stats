const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3080
const node_env = process.env.NODE_ENV || 'development'


app.use(cors())
//app.use('env', node_env)

app.use('/character', require('./routes/CharacterData'))
app.use('/apiKey', require('./routes/ApiKey'))
app.use('/stats', require('./routes/AccountStats'))
app.use('/profil', require('./routes/accountProfil'))

app.listen(port, () => console.log(`listen on port: ${port}`))