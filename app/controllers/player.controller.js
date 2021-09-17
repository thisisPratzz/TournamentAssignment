const Players = require("../models/player.js");

// Create and Save a new Players
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Players
    const players = new Players({
      name: req.body.name,
      country: req.body.country,
      team: req.body.team,
      year: req.body.year 

    });
  
    // Save Players in the database
    Players.create(players, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error  while creating the Players."
        });
      else res.send(data);
    });
  };


  exports.findAll = (req, res) => {
    Players.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.getScores = (req, res) => {
    Players.getScores((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data[0]);
    });
  };

  
  exports.getMacthsummary = (req, res) => {
    Players.getMacthsummary((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data[0]);
    });
  };
  


  exports.findOne = (req, res) => {
    Players.findById(req.params.playerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.playerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.playerId
          });
        }
      } else res.send(data);
    });
  };
