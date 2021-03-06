const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, required: true },
  profilepicture: { type: String, },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;