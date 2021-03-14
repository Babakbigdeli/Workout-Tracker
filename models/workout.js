// defining dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema elements
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
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

    }],
    // Mongoose supports virtual attributes. Virtual attributes are attributes that are convenient to have around but that do not get persisted to mongodb.
    //https://mongoosejs.com/docs/2.7.x/docs/virtuals.html
    {
        toJSON: {
          virtuals: true,
        },
      }


});

//a function to get the total duration
workoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, current) => {
      return acc + current.duration;
    }, 0);
  
    return duration;
  });
  
//converting our blogSchema into a Model we can work with
const Workout = mongoose.model("Workout", workoutSchema);

//and then export it
module.exports = Workout;