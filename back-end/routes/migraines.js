const Migraine = require('../models/Migraine')

const router = require('express').Router()

router.get('/', (req, res) => {
  Migraine.find().exec()
    .then(docs => res.status(200).json(docs).end())
    .catch(err => res.status(500).json(err).end())
})

router.post('/', (req, res) => {
  Promise.resolve()
    .then(() => ['intensity', 'water'].forEach(field => {
      if (!(field in req.body)) {
        throw new Error(`\`${field}\` is not in request body`)
      }
    }))
    .then(() => Migraine.create({
      intensity: req.body.intensity,
      water: req.body.water,
      triggers: req.body.triggers,
      journal: req.body.journal,
      pressure: req.body.pressure,
      tempMax: req.body.tempMax,
      tempMin: req.body.tempMin,
      weatherMain: req.body.weatherMain
    }))
    .then(migraine => res.status(201).json(migraine).end())
    .catch(message => res.status(400).json({ error: true, message }).end())
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
  return Promise.resolve()
    .then(() => Migraine.validate(req.body))
    .then(() => Migraine.findByIdAndUpdate(req.body.id, req.body))
    .then(migraine => res.status(200).json(migraine).end())
    .catch(message => res.status(500).json({ error: true, message }).end())
})

router.delete('/:id', (req, res) => {
  Migraine.findByIdAndRemove(req.params.id).exec()
    .then(migraine => res.status(204).end())
    .catch(message => res.status(404).json({ error: true, message }).end())
})

module.exports = router
