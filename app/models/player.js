const sql = require("./db.js");



const Player = function(player){
  this.playername= player.name;
  this.country= player.country;
  this.team= player.team;
  this .year = player.year ;
};




Player.create =(newPlayer,result)=>{

        sql.query(`call createPlayer('${newPlayer.playername}','${newPlayer.country}','${newPlayer.team}',${newPlayer.year},@id);`,(err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log("created player: ", { id: res[0][0].insertId, ...newPlayer });
            result(null, { id: res[0][0].insertId, ...newPlayer });
         });
};


Player.getAll = result => {
  sql.query("call getallplayersdetails(2021)", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("players: ", res);
    result(null, res);
  });
};

Player.getScores = result => {
  sql.query("call getallscores(2021);", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("players: ", res);
    result(null, res);
  });
};


Player.getMacthsummary = result => {
  sql.query("call getallmactchdetails();", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("players: ", res);
    result(null, res);
  });
};

Player.findById = (playerId, result) => {
  sql.query(`call getplayerbyid(${playerId});`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};




module.exports = Player;