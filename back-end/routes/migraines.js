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
        res.status(400).json({ error: true, message }).end()
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


router.put('/:id', (req, res) => {
  if (!(req.params['id'] && req.body['id'] && req.params['id'] === req.body['id'])) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {}
  const updateableFields = ['intensity', 'water', 'triggers', 'journal'];
    updateableFields.forEach(field => {
      if (field in req.body) {
        updated[field] = req.body[field];
      }
    });

  Migraine.findByIdAndUpdate(req.params['id']).exec()
    .then(migraine => {
      res.status(200).json({message:'Updated journal post!!'}).end()
    })
    .catch(message => {
      res.status(500).json({ error: true, message }).end()
    })
})



router.delete('/:id', (req, res) => {
  Migraine.findByIdAndRemove(req.params['id']).exec()
    .then(migraine => {
      // if this function executes, Migraine found a valid migraine entry with
      // that _id.
      // need to delete and throw message that _id was successfully
      // deleted
      res.status(204).json({message:'Migraine was successfully deleted!'}).end()
    })
    .catch(message => {
      //if this function executes, Migraine didn't find and throw an error
      res.status(404).json({ error: true, message }).end()
    })
})

module.exports = router
