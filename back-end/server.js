const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

mongoose.Promise = Promise
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'))
mongoose.connection.once('open', () => console.log('MongoDB connected'))

const PORT = process.env.PORT || 8080
const app = express()

let server

app.use(bodyParser.json())
app.use('/migraines', require('./routes/migraines'))
app.use(express.static(path.resolve(__dirname, '../front-end')))

const runServer = () => {
  if (server && server.listening) return

  return new Promise((res, rej) => {
    server = app.listen(PORT, () => res(server))
    server.on('error', rej)
  })
}

const closeServer = () => {
  return new Promise((res, rej) => {
    server.close(err => {
      if (err) return rej(err)

      res()
    })
  })
}

if (require.main === module) {
  runServer().catch(console.error.bind(console))
}

module.exports = { app, runServer, closeServer }
