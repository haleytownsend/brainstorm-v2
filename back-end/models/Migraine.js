const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now, required: true },
  intensity: { type: Number, required: true },
  water: { type: Number, required: true },
  triggers: [ String ],
  journal: String,
  pressure: { type: Number, required: true },
  tempMin: { type: Number, required: true },
  tempMax: { type: Number, required: true },
  weatherMain: String
})

schema.methods.apiRepr = function () {
  const repr = { id: this._id }

  Object.keys(this).forEach(key => {
    if (key !== '_id') Object.assign(repr, { [key]: this[key] })
  })

  return repr
}

const Migraine = mongoose.model('Migraine', schema)

module.exports = Migraine
