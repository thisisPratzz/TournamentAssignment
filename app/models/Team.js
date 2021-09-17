const sql = require("./db.js");



const Team = function(team){
  this.name= team.name;
  this.owner= team.owner;
  this.captain= team.captain;

};




Team.create =(newTeam,result)=>{


        sql.query(`call createTeam('${newTeam.name}','${newTeam.owner}','${newTeam.captain}',@id);`,(err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log("created team : ", { id: res[0][0].insertId, ...newTeam });
            result(null, { id: res[0][0].insertId, ...newTeam });
         });
};



Team.getAll = result => {
  sql.query("call getallTeeamDetails()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("players: ", res);
    result(null, res);
  });
};


module.exports = Team;