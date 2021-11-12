const router = require("express").Router();
let Profile = require("../models/profile.model");

// Profile.deleteOne({ userId: "618da6de37f0d337b8a49299" }).then((p) =>
//   console.log(p)
// );

router.get("/:userId", (req, res) => {
  Profile.findOne({ userId: req.params.userId })
    .then((profile) => res.json(profile))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const newProfile = new Profile(req.body);

  newProfile
    .save()
    .then(() => res.json("Profile added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update", (req, res) => {
  Profile
    .updateOne({userId: req.body.userId}, {$set: req.body})
    .then((response) => res.json("Profile updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
