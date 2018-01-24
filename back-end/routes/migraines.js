const Migraine = require('../models/Migraine')

const router = require('express').Router()

router.get('/', (req, res) => {
  Migraine.find().exec()
    .then(docs => res.status(200).json(docs).end())
    .catch(err => res.status(500).json(err).end())
})

router.post('/', (req, res) => {
  try {
    ['intensity', 'water'].forEach(field => {
      if (!(field in req.body)) {
        throw `\`${field}\` is not in request body`
        res.status(400).json({ error: true, message })
      }
    var migraine = Migraine.create({req.body.intensity, req.body.water, req.body.triggers, req.body.journal});
    res.status(201).end()
    })
  }
  catch (err) {
    res.status(400).json(err).end()
  }
})


router.get('/:id', (req, res) => {
  Migraine.findById(req.params['id']).exec()
    .then(migraine => {
      res.status(200).json(migraine).end()
    })
    .catch(message => {
      res.status(404).json({ error: true, message }).end()
    })
})


router.put('/:id', (req, res) => {
  Migraine.findByIdAndUpdate(req.params.id, (err, migraine) => {
    if (err) {
      res.status(500).json({ error: true, message }).end()
    } else {
        migraine.intensity = req.body.intensity || migraine.intensity;
        migraine.water = req.body.water ||  migraine.water;
        migraine.triggers = req.body.triggers || migraine.triggers;
        migraine.journal = req.body.journal || migraine.journal;

        migraine.save((err, migraine) => {
          if (err) {
            res.status(500).json({ error: true, message }).end()
          }
          res.status(200).json({message:'Updated journal post!!'}).end()
        })
      }
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
