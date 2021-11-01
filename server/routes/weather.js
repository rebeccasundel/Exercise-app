const router = require('express').Router();
const axios = require('axios')

console.log ('test')
router.route('/').get((req, res) => {
    console.log ('weather')
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${process.env.MIAMI_CODE}?apikey=${process.env.API_KEY}`)
    .then(res=>console.log (res.data))
    
  });

module.exports = router;