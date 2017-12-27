const mongoose = require('mongoose');

const schema = mongoose.Schema({
  createdAt: {type: Date, default: Date.now},
  intensity: {type: Number, required: true},
  triggers: {
    alcohol: {type: Boolean},
    food: {type: Boolean},
    hormones: {type: Boolean},
    sleep: {type: Boolean},
    stress: {type: Boolean}],
    water: {type: Number, required: true},
    journal: {type: String}
  }
});

schema.methods.apiRepr = () => {
  const repr = { id: this._id }

  Object.keys(this).forEach(key => {
    if (key !== '_id') Object.assign(repr, { [key]: this[key] })
  })

  return repr
}

const UserEntry = mongoose.model('userEntry', schema);

module.exports = UserEntry;
