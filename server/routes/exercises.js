const router = require("express").Router();
let Exercise = require("../models/exercise.model");
console.log("test");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const profilepicture = req.body.profilepicture;

  const newExercise = new Exercise({
    name,
    description,
    duration,
    date,
    profilepicture,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:exerciseId").delete((req, res) => {
  Exercise.deleteOne({ _id: req.params.exerciseId })
    .then(() => res.json("Exercise deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
