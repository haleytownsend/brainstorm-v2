const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  intensity: { type: Number, required: true },
  water: { type: Number, required: true },
  triggers: [ String ],
  journal: String
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
