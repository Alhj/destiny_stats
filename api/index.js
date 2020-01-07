const express = require('express')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3080
const node_env = process.env.NODE_ENV || 'development'


app.use('env', node_env)

app.use('/character', require('./routes/CharacterData'))
app.use('/apiKey', require('./routes/ApiKey'))

app.listen(port, () => console.log(`listen on port: ${port}`))