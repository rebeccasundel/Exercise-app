const router = require("express").Router();
let Profile = require('../models/profile.model');


router.get("/:userId", (req, res) => {
 console.log(req.params)
 Profile.find({userId:req.params.userId})
 .then(profile => res.json(profile))
 .catch(err => res.status(400).json('Error: ' + err));
  
});

router.post("/update", (req, res) => {
    console.log(req.body)
    const newProfile = new Profile(req.body);


    newProfile.save()
      .then(() => res.json('Profile added!'))
      .catch(err => res.status(400).json('Error: ' + err));

});



module.exports = router;