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

    app.put("/api/workouts/:id?", (req, res) => {
        console.log(req.body)
        //var input = JSON.parse(req.body.exercize);
        //console.log(input)
        db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true})
        .then(dbNote => {
         res.json(dbNote);
        })
        .catch(err => {
        res.json(err);
        });
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(dbNote => {
         res.json(dbNote);
        })
        .catch(err => {
        res.json(err);
        });
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbNote => {
         res.json(dbNote);
        })
        .catch(err => {
        res.json(err);
        });
    })
}