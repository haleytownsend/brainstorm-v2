const mongoose = require('mongoose');

const userEntrySchema = mongoose.Schema({
  intensity: {type: Number, required: true},
  triggers: [
    alcohol: {type: Boolean, required: false},
    food: {type: Boolean, required: false},
    hormones: {type: Boolean, required: false},
    sleep: {type: Boolean, required: false},
    stress: {type: Boolean, required: false}],
  water: {type: Number, required: true},
  journal: {type: String, required: false},
  created: {type: Date, default: Date.now}]
  }
});

userEntrySchema.virtual('intensity').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

userEntrySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
}

const userEntry = mongoose.model('userEntry', userEntrySchema);

module.exports = {userEntry};
