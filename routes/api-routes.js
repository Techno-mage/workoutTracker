var db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbNote => {
         res.json(dbNote);
        })
        .catch(err => {
        res.json(err);
        });
    })
}