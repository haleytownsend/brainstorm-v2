const Migraine = require('../models/Migraine')

const router = require('express').Router()

router.get('/', (req, res) => {
  Migraine.find().exec()
    .then(docs => res.status(200).json(docs).end())
    .catch(err => res.status(500).json(err).end())
})

router.post('/', (req, res) => {
  try {
    ;['intensity', 'water'].forEach(field => {
      if (!(field in req.body)) {
        throw `\`${field}\` is not in request body`
      }
    })

    res.send('TODO: save the migraine payload into MongoDB')

    res.status(201).end()
  }
  catch (message) {
    return res.status(400).end({error: true, message})
  }
})

router.get('/:migraine-id', (req, res) => {
  res.send('TODO: implement migraine view')
})

router.put('/:migraine-id', (req, res) => {
  res.send('TODO: implement migraine update')
})

router.delete('/:migraine-id', (req, res) => {
  res.send('TODO: implement migraine destruction')
})

module.exports = router
