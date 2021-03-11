//bringing in dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");

//a get request to query all first

router.get("api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});