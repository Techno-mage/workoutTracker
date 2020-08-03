const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
    default: Date.now
    },
    exercises: {
        type: Array,
        "default": []
    }

})

var Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;