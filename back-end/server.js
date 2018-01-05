const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/brainstorm')
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'))
mongoose.connection.once('open', () => console.log('MongoDB connected'))

const PORT = process.env.PORT || 8080
const app = express()

let server

app.use(bodyParser.json())
app.use('/migraines', require('./routes/migraines'))
app.use(express.static('public'))

app.get('/', (req, res) => res.end('Up and running'))

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
