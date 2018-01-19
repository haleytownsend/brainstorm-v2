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
    return res.status(400).json({error: true, message}).end()
  }
})


// http://haleys-migraine-app.com/migraines/a1b2c3d4e5
router.get('/:id', (req, res) => {
  Migraine.findById(req.params['id']).exec()
    .then(migraine => {
      // if this function executes, Migraine found a valid migraine entry with
      // that _id
      res.status(200).json(migraine).end()
    })
    .catch(message => {
      // if this function executes, Migraine didn't find and throw an error
      res.status(404).json({ error: true, message }).end()
    })
})

router.put('/:migraine-id', (req, res) => {
  res.send('TODO: implement migraine update')
})

router.delete('/:migraine-id', (req, res) => {
  res.send('TODO: implement migraine destruction')
})

module.exports = router
