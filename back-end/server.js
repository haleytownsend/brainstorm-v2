const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

let server;

app.use(express.static('public'));

function runServer() {
  console.log('running run');
  return new Promise((resolve, reject) => {
    server = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`)
      resolve(server)
    })
    server.on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
      });
  });
}

if (require.main === module) {
  runServer().catch(console.error(err));
};

module.exports = { app, runServer, closeServer };
