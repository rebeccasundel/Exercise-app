const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutsessionSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: false },
    date: { type: Date, required: true },
    exercises: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: Number, required: true },
        date: { type: Date, required: true },
      }]})


const WorkoutSession = mongoose.model('WorkoutSession', workoutsessionSchema);

module.exports = WorkoutSession;