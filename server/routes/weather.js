const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get(
      `http://dataservice.accuweather.com/currentconditions/v1/${process.env.MIAMI_CODE}?apikey=${process.env.API_KEY}`
    )
    .then((d) => res.json(d.data))
    .catch(error=>{
      console.log (error)
      res.send(error)
    });
});

module.exports = router;