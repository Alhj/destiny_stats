const express = require('express')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3080

app.use('/character', require('./routes/CharacterData'))
app.use('/apiKey', require('./routes/ApiKey'))

app.listen(port, () => console.log(`listen on port: ${port}`))