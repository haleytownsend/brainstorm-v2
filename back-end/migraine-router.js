const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


//post endpoint
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['intensity', 'water'];
  const field = requiredFields[i];

  try {
    ;['intensity', 'water'].forEach(requiredField = > {
      if (!(requiredField in req.body)) {
        throw `\`${field}\` is not in request body`
      }
    })
  }
  catch (message) {
    return res.status(400).end({error: true, message})
  }

  // TODO: save the migraine payload into MongoDB
  res.status(201).end('Created')
})

//not required
'triggers'
'journal'

\\module.exports = router;
