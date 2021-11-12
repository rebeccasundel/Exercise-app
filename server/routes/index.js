const router = require("express").Router();
const authRoutes = require("./auth");
const exercisesRouter = require("./exercises");
const weatherRouter = require("./weather");
const profileRouter = require("./profile");
const workoutSessionRouter = require("./workout-session");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use('/exercises', exercisesRouter);
router.use('/weather', weatherRouter);
router.use("/auth", authRoutes);
router.use("/profile", profileRouter);
router.use("/workout-sessions", workoutSessionRouter);

module.exports = router;
