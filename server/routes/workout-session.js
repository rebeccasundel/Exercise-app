const router = require('express').Router();
let WorkoutSession = require('../models/workout-session.model');

router.route('/:userId').get((req, res) => {
    console.log(req.params)
    WorkoutSession.find({userId: req.params.userId})
      .then(workoutSession => res.json(workoutSession))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    console.log(req.body)
    const userId = req.body.userId;
    const name = req.body.workoutSessionName;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    const exercises =req.body.savedExercises;
  
    const newWorkoutSession = new WorkoutSession({
      userId,
      name,
      description,
      duration,
      date,
      exercises,
    });
  
    newWorkoutSession.save()
    .then(() => res.json('Workout added!'))
    .catch(err => {
      console.log(err)
      res.status(400).json('Error: ' + err)
    });
  });

module.exports = router;