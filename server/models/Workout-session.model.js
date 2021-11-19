const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutsessionSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: String, required: false },
    date: { type: Date, required: true },
    exercises: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: String, required: true },
        date: { type: Date, required: true },
        profilepicture: { type: String, },
      }]})


const WorkoutSession = mongoose.model('WorkoutSession', workoutsessionSchema);

module.exports = WorkoutSession;