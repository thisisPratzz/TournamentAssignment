module.exports = app => {
    const players = require("../controllers/player.controller.js");
  
    // Create a new Players
    app.post("/players", players.create);
  
     //Retrieve all players
    app.get("/players", players.findAll);
  
// Retrieve a single Player  with player customerId
    app.get("/players/:playerId", players.findOne);

    app.get("/tournamentscores", players.getScores);

    app.get("/macthsummary", players.getMacthsummary);
    //

  
//     // Update a Customer with customerId
//     app.put("/players/:customerId", players.update);
  
//     // Delete a Customer with customerId
//     app.delete("/players/:customerId", players.delete);
  
//     // Create a new Customer
//     app.delete("/players", players.deleteAll);
//   
};