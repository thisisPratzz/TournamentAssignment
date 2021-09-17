const Team = require("../models/Team.js");

// Create and Save a new Team
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Team
    const team = new Team({
      
      name: req.body.name,
      owner: req.body.owner,
      captain: req.body.captain             
    });
  
    // Save Team in the database
    Team.create(team, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Team."
        });
      else res.send(data);
    });
  };


  
  exports.findAll = (req, res) => {
    Team.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Team."
        });
      else res.send(data[0]);
    });
  };

  