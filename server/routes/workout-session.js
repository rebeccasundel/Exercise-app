const router = require('express').Router();
let WorkoutSession = require('../models/workout-session.model');

router.route('/').get((req, res) => {
    WorkoutSession.find()
      .then(workoutSession => res.json(workoutSession))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const username = req.body.username;
    const user = req.body.user;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const exercises =req.body.exercises;
  
    const newWorkoutSession = new WorkoutSession({
      username,
      user,
      description,
      duration,
      date,
      exercises,
    });
  
    newWorkoutSession.save()
    .then(() => res.json('Workout added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;