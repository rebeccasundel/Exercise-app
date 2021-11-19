const router = require("express").Router();
let WorkoutSession = require("../models/workout-session.model");

router.route("/:userId").get((req, res) => {
  WorkoutSession.find({ userId: req.params.userId })
    .then((workoutSession) => res.json(workoutSession))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userId = req.body.userId;
  const name = req.body.workoutSessionName;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;
  const exercises = req.body.savedExercises;

  const newWorkoutSession = new WorkoutSession({
    userId,
    name,
    description,
    duration,
    date,
    exercises,
  });

  newWorkoutSession
    .save()
    .then(() => res.json("Workout added!"))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").post((req, res) => {
  const update = {
    ...req.body,
    name: req.body.workoutSessionName,
    exercises: req.body.savedExercises,
  };
  delete update.workoutSessionName;
  delete update.savedExercises;
  WorkoutSession.findOneAndUpdate({ _id: req.params.id }, update)
    .then(() => res.json("Workout Session updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:workoutSessionId").delete((req, res) => {
  WorkoutSession.deleteOne({ _id: req.params.workoutSessionId })
    .then(() => res.json("Workout Session deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
