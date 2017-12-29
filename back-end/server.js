const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

let server

app.use(express.static('public'))

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
