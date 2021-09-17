module.exports = app => {
    const teams = require("../controllers/team.controller.js");
  
    // Create a new Team
    app.post("/team", teams.create);
  
     app.get("/team", teams.findAll);
  
};