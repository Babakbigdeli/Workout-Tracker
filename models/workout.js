// defining dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema elements
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercices: [{

        type: {
            type: String,
            required: "Type is required"
        },

        name: {
            type: String,
            required: "Name is required"
        },

        duration: {
            type: Number,
            required: "Druration is required"
        },

        weight: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        distance: {
            type: Number,
        }

    }]


});

//converting our blogSchema into a Model we can work with

const Workout = mongoose.model("Workout", workoutSchema);